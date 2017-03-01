var map;
var ground;
var sky;
var player;
var xiaoqian;
var timeText;
var enemyGroup;
var killed = false;

var playState = {
    preload: function() {
        game.load.spritesheet('player', 'assets/player.png', 108, 100);
        game.load.tilemap('floor', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles-floor', 'assets/floor.png');
        game.load.spritesheet('enemy', 'assets/enemy.png', 46, 30);
        game.load.spritesheet('xiaoqian', 'assets/xiaoqian.png', 42, 100);
    },
    create: function() {
        // 重置killed状态
        killed = false;

        //  启动物理引擎
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  地图
        map = game.add.tilemap('floor');
        map.addTilesetImage('floor', 'tiles-floor');

        ground = map.createLayer('collide');
        ground.resizeWorld();
        groundStyle = map.createLayer('floor');
        groundStyle.resizeWorld();

        map.setCollisionBetween(0, 10000);

        // console.log(game.world.width, game.world.height)
        // 玩家
        player = game.add.sprite(32, 50, 'player');

        //  启动玩家物理
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 1000;
        player.body.collideWorldBounds = true;

        //  玩家动画
        player.animations.add('right', [0, 1], 10, true);

        // 镜头跟随
        game.camera.follow(player, Phaser.Camera.STYLE_LOCKON, 1, 1);

        // 计时文字
        timeText = game.add.text(16, 16, '时间: 0s', { fontSize: '32px', fill: '#fff' });
        timeText.fixedToCamera = true;

        // 怪物
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        var enemy1 = enemyGroup.create(500, 100, 'enemy');
        var enemy2 = enemyGroup.create(1550, 100, 'enemy');
        enemyGroup.forEach(function(enemy) {
            enemy.anchor.setTo(.5,.5);
            enemy.body.gravity.y = 300;
            enemy.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        });

        // 终点小倩
        xiaoqian = game.add.sprite(game.world.width - 42, 100, 'xiaoqian');
        game.physics.arcade.enable(xiaoqian);
        xiaoqian.body.gravity.y = 1000;
    },
    update: function() {
        var volume = meter ? meter.volume * 1000 : 0,
        collideWithFloor = false;

        //  重置速度
        player.body.velocity.x = 0;

        // 下落死亡逻辑
        if (player.position.y >= game.world.height - 105) {
            this.gameOver();
        }

        // 碰到怪物后不进行以下逻辑直接返回
        if (killed) {
            player.frame = 2;
            return;
        }

        // 更新时间
        time = (game.time.now - timeSinceLastGame) / 1000;
        timeText.text = '时间: ' + time + 's';

        // 怪物左右移动逻辑
        var int = parseInt(time / 4);
        if (int % 2 === 0) {
            enemyGroup.forEach(function(enemy) {
                enemy.body.velocity.x = 80;
                enemy.animations.play('right');
                if (enemy.scale.x > 0) {
                    enemy.scale.x *= -1;
                }
            }, this);
        } else {
            enemyGroup.forEach(function(enemy) {
                enemy.body.velocity.x = -80;
                enemy.animations.play('right');
                if (enemy.scale.x < 0) {
                    enemy.scale.x *= -1;
                }
            }, this);
        }

        //  碰撞检测
        game.physics.arcade.collide(player, ground, function() {
            collideWithFloor = true;
        });
        game.physics.arcade.collide(enemyGroup, ground);
        game.physics.arcade.collide(xiaoqian, ground);

        // 玩家和怪物重叠
        game.physics.arcade.overlap(player, enemyGroup, this.killed, null, this);

        // 更新玩家速度
        if (volume > 20) {
            if (volume > MAX_SPEED) {
                player.body.velocity.x = MAX_SPEED;
            } else {
                player.body.velocity.x = volume;
            }
            player.animations.play('right');
        } else {
            player.body.velocity.x = 0;
            player.animations.stop();
            player.frame = 0;
        }

        // 玩家跳跃
        if (volume > JUMP_SPEED && (player.body.touching.down || collideWithFloor) && player.position.y < 440) {
            player.body.velocity.y = -550;
        }

        // 完成游戏逻辑
        game.physics.arcade.overlap(player, xiaoqian, this.gameComplete, null, this);
        // if (player.position.x >= game.world.width - 200) {
        //     this.gameComplete();
        // }

        // 更新游戏背景位置，凸显层次感
        $('.bg-img').css({
            'transform': 'translateX(' + -game.camera.x * 0.2 + 'px)'
        });
    },
    render: function() {
        if (!timeSinceLastGame) timeSinceLastGame = game.time.now;
    },

    killed: function(player, enemy) {
        killed = true;
        enemy.kill();
        game.add.tween(player).to({y: 100}, 500, Phaser.Easing.Quadratic.Out, true);
    },
    gameOver: function() {
        game.state.start('gameOver');
    },
    gameComplete: function() {
        game.state.start('gameComplete');
    }
}
