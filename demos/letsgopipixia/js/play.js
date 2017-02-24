var map;
var ground;
var sky;
var player;
var timeText;

var playState = {
    preload: function() {
        game.load.spritesheet('dude', 'assets/dude.png', 100, 92);
        game.load.tilemap('floor', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/brick.png');
        game.load.image('sky', 'assets/sky.png');
    },
    create: function() {
        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        map = game.add.tilemap('floor');
        map.addTilesetImage('brick', 'tiles');
        map.addTilesetImage('sky', 'sky');

        ground = map.createLayer('brick-tiles');
        ground.resizeWorld();
        sky = map.createLayer('background');
        sky.resizeWorld();

        map.setCollisionBetween(0, 100, true, ground);

        // The player and its settings
        player = game.add.sprite(32, 50, 'dude');

        //  We need to enable physics on the player
        game.physics.arcade.enable(player);

        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 1000;
        player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        player.animations.add('right', [0, 1], 10, true);

        game.camera.follow(player);

        timeText = game.add.text(16, 16, '时间: 0s', { fontSize: '32px', fill: '#fff' });
        timeText.fixedToCamera = true;
    },
    update: function() {

        var volume = meter ? meter.volume * 1000 : 0,
        collideWithFloor = false;

        time = (game.time.now - timeSinceLastGame) / 1000;
        timeText.text = '时间: ' + time + 's';

        //  Collide the player and the stars with the platforms);
        game.physics.arcade.collide(player, ground, function() {
            collideWithFloor = true;
        });

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;

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
            player.frame = 4;
        }

        if (volume > JUMP_SPEED && (player.body.touching.down || collideWithFloor) && player.position.y < 440) {
            player.body.velocity.y = -550;
        }

        if (player.position.y >= 540) {
            this.gameOver();
        }

        if (player.position.x >= game.world.width - 200) {
            this.gameComplete();
        }
    },

    gameOver: function() {
        game.state.start('gameOver');
    },
    gameComplete: function() {
        game.state.start('gameComplete');
    }
}
