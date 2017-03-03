var playState = (function() {
    var map,
        ground,
        sky,
        player,
        xiaoqian,
        timeText,
        enemyGroup,
        killed = false,
        talk,
        tip1,
        tip2,
        runBtn,
        jumpBtn,
        loadingText,
        groundCollide;

    return {
        preload: function() {
            loadingText = game.add.text(WIDTH / 2, HEIGHT / 2, "加载中...", { font: "35px Arial", fill: "#000000" });
            loadingText.anchor.set(0.5, 0.5);
            loadingText.fixedToCamera = true;
            game.load.spritesheet('player', 'assets/player.png', 108, 100);
            // game.load.tilemap('floor', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
            game.load.image('floor1', 'assets/floor1.png');
            game.load.image('floor2', 'assets/floor2.png');
            game.load.image('floor3', 'assets/floor3.png');
            game.load.image('floor4', 'assets/floor4.png');
            game.load.image('floor5', 'assets/floor5.png');
            game.load.image('black', 'assets/black.png');
            game.load.image('talk', 'assets/talk.png');
            game.load.image('tip1', 'assets/tip1.png');
            game.load.image('tip2', 'assets/tip2.png');
            game.load.spritesheet('run', 'assets/run.png', 100, 100);
            game.load.spritesheet('jump', 'assets/jump.png', 100, 100);
            game.load.spritesheet('enemy', 'assets/enemy.png', 46, 30);
            game.load.spritesheet('xiaoqian', 'assets/xiaoqian.png', 42, 100);
        },
        create: function() {
            game.load.onLoadComplete.add(resetTime, this);

            // 重置killed状态
            killed = false;

            //  启动物理引擎
            game.physics.startSystem(Phaser.Physics.ARCADE);

            game.world.resize(WORLD_WIDTH, WORLD_HEIGHT);
            //  地图
            ground = game.add.group();
            ground.enableBody = true;

            var ground1 = ground.create(0, WORLD_HEIGHT, 'floor2');
            ground1.anchor.setTo(0, 1);
            ground1.body.immovable = true;
            ground1.scale.set(0.5);

            var ground2 = ground.create(400, WORLD_HEIGHT, 'floor1');
            ground2.anchor.setTo(0, 1);
            ground2.body.immovable = true;
            ground2.scale.set(0.5);

            var ground3 = ground.create(850, WORLD_HEIGHT, 'floor3');
            ground3.anchor.setTo(0, 1);
            ground3.body.immovable = true;
            ground3.scale.set(0.5);

            var ground4 = ground.create(1470, WORLD_HEIGHT, 'floor4');
            ground4.anchor.setTo(0, 1);
            ground4.body.immovable = true;
            ground4.scale.set(0.5);

            var ground5 = ground.create(1800, WORLD_HEIGHT, 'floor4');
            ground5.anchor.setTo(0, 1);
            ground5.body.immovable = true;
            ground5.scale.set(0.6);

            var ground6 = ground.create(game.world.width, WORLD_HEIGHT, 'floor5');
            ground6.anchor.setTo(1, 1);
            ground6.body.immovable = true;
            ground6.scale.set(0.5);

            // 地图碰撞区域
            groundCollide = game.add.group();
            groundCollide.enableBody = true;

            var collide1 = groundCollide.create(0, WORLD_HEIGHT, 'black');
            collide1.anchor.setTo(0, 1);
            collide1.body.immovable = true;
            collide1.scale.set(230, 80);

            var collide2 = groundCollide.create(410, WORLD_HEIGHT, 'black');
            collide2.anchor.setTo(0, 1);
            collide2.body.immovable = true;
            collide2.scale.set(120, 120);

            var collide3 = groundCollide.create(530, WORLD_HEIGHT, 'black');
            collide3.anchor.setTo(0, 1);
            collide3.body.immovable = true;
            collide3.scale.set(90, 70);

            var collide4 = groundCollide.create(860, WORLD_HEIGHT, 'black');
            collide4.anchor.setTo(0, 1);
            collide4.body.immovable = true;
            collide4.scale.set(250, 70);

            var collide5 = groundCollide.create(1110, WORLD_HEIGHT, 'black');
            collide5.anchor.setTo(0, 1);
            collide5.body.immovable = true;
            collide5.scale.set(60, 170);

            var collide6 = groundCollide.create(1170, WORLD_HEIGHT, 'black');
            collide6.anchor.setTo(0, 1);
            collide6.body.immovable = true;
            collide6.scale.set(90, 70);

            var collide7 = groundCollide.create(1480, WORLD_HEIGHT, 'black');
            collide7.anchor.setTo(0, 1);
            collide7.body.immovable = true;
            collide7.scale.set(130, 70);

            var collide8 = groundCollide.create(1810, WORLD_HEIGHT, 'black');
            collide8.anchor.setTo(0, 1);
            collide8.body.immovable = true;
            collide8.scale.set(140, 85);

            var collide9 = groundCollide.create(game.world.width, WORLD_HEIGHT, 'black');
            collide9.anchor.setTo(1, 1);
            collide9.body.immovable = true;
            collide9.scale.set(30, 50);

            // 玩家
            player = game.add.sprite(32, WORLD_HEIGHT - 200, 'player');

            //  启动玩家物理
            game.physics.arcade.enable(player);
            player.body.bounce.y = 0.2;
            player.body.gravity.y = 1000;
            player.body.collideWorldBounds = true;

            //  玩家动画
            player.animations.add('right', [0, 1], 10, true);

            // 镜头跟随
            // game.camera.follow(player, Phaser.Camera.STYLE_LOCKON, 1, 1);
            game.camera.y = WORLD_HEIGHT - 80;

            // 对话框
            talk = game.add.image(32 + 40, 50 - 60, 'talk');
            talk.scale.set(0.5);

            // 计时文字
            timeText = game.add.text(16, 50, '时间: 0s', { fontSize: '12px', fill: '#fff' });
            timeText.fixedToCamera = true;

            // 怪物
            enemyGroup = game.add.group();
            enemyGroup.enableBody = true;
            var enemy1 = enemyGroup.create(940, WORLD_HEIGHT - 200, 'enemy');
            // var enemy2 = enemyGroup.create(1550, WORLD_HEIGHT - 200, 'enemy');
            enemyGroup.forEach(function(enemy) {
                enemy.anchor.setTo(.5,.5);
                enemy.body.gravity.y = 300;
                enemy.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
            });

            // 终点小倩
            xiaoqian = game.add.sprite(game.world.width - 42, 100, 'xiaoqian');
            game.physics.arcade.enable(xiaoqian);
            xiaoqian.body.gravity.y = 1000;

            // 地图上方小倩对话框
            tip1 = game.add.image(WIDTH / 2, 100, 'tip1');
            tip1.anchor.setTo(0.5, 0.5);
            tip1.scale.set(0.4);
            tip1.fixedToCamera = true;
            tip1.visible = false;

            tip2 = game.add.image(WIDTH / 2, 100, 'tip2');
            tip2.anchor.setTo(0.5, 0.5);
            tip2.scale.set(0.4);
            tip2.fixedToCamera = true;
            tip2.visible = false;

            if (!support) {
                runBtn = game.add.button(60, HEIGHT - 50, 'run', null, this, 0, 0, 1);
                runBtn.anchor.setTo(0.5, 0.5);
                runBtn.scale.set(0.5);
                runBtn.fixedToCamera = true;


                jumpBtn = game.add.button(WIDTH - 60, HEIGHT - 50, 'jump', null, this, 0, 0, 1);
                jumpBtn.anchor.setTo(0.5, 0.5);
                jumpBtn.scale.set(0.5);
                jumpBtn.fixedToCamera = true;
            }
        },
        update: function() {
            if (player.position.y === WORLD_HEIGHT - 200) { // 判断渲染出画面的标志
                timeSinceLastGame = game.time.now;
                loadingText.kill();
            }
            var volume = meter ? meter.volume * 1000 * volumeRatio : 0,
            collideWithFloor = false;

            //  重置速度
            player.body.velocity.x = 0;

            game.camera.x = player.position.x - 50;

            // 下落死亡逻辑
            if (player.position.y >= WORLD_HEIGHT - 105) {
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
            
            // 对话框跟随player和销毁逻辑
            if (time < 5) {
                // console.log
                talk.visible = true;
                talk.position.x = player.position.x + 40;
                talk.position.y = player.position.y - 60;
            } else {
                talk.kill();
            }

            // 小倩对话框
            if (time > 10 && time < 15) {
                tip1.visible = true;
                tip2.visible = false;
            } else if (time > 25) {
                tip1.visible = false;
                tip2.visible = true;
            } else {
                tip1.visible = false;
                tip2.visible = false;
            }

            // 怪物左右移动逻辑
            var int = parseInt(time / 2);
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
            game.physics.arcade.collide(player, groundCollide, function() {
                collideWithFloor = true;
            });
            game.physics.arcade.collide(enemyGroup, groundCollide);
            game.physics.arcade.collide(xiaoqian, groundCollide);

            // 玩家和怪物重叠
            game.physics.arcade.overlap(player, enemyGroup, this.killed, null, this);

            // 更新玩家速度
            if (support) {
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
            } else {
                if (runBtn.frame == 1) {
                    player.body.velocity.x = MAX_SPEED;
                    player.animations.play('right');
                } else {
                    player.animations.stop();
                }
            }

            // 玩家跳跃
            if (support) {
                if (volume > JUMP_SPEED && (player.body.touching.down || collideWithFloor) && player.position.y < WORLD_HEIGHT - 105) {
                    player.body.velocity.y = -550;
                }
            } else {
                // if (jumpBtn.frame == 1) {
                if (jumpBtn.frame == 1 && (player.body.touching.down || collideWithFloor) && player.position.y < WORLD_HEIGHT - 105) {
                    player.body.velocity.y = -550;
                }
            }

            // 完成游戏逻辑
            game.physics.arcade.overlap(player, xiaoqian, this.gameComplete, null, this);
            // if (player.position.x >= game.world.width - 200) {
            //     this.gameComplete();
            // }

            // 更新游戏背景位置，凸显层次感
            // $('.bg-img').css({
            //     'transform': 'translateX(' + -game.camera.x * 0.2 + 'px)'
            // });
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

    function resetTime() {
        timeSinceLastGame = game.time.now;
    }

}());
