var menuState = (function() {
    var menu, mask, start, heart, wholeMask;

    function showStart() {
        mask.kill();

        wholeMask = game.add.image(WIDTH / 2, HEIGHT / 2, 'mask');
        wholeMask.anchor.setTo(0.5, 0.5);
        wholeMask.scale.set(WIDTH / wholeMask.height, HEIGHT / wholeMask.height);
        wholeMask.inputEnabled = true;
        wholeMask.events.onInputDown.add(startGame, game);

        start = game.add.image(WIDTH / 2, HEIGHT / 2, 'menu-start');
        start.anchor.setTo(0.5, 0.5);
        start.scale.set(HEIGHT / start.height, HEIGHT / start.height);
        start.inputEnabled = true;
        start.events.onInputDown.add(startGame, game);

        heart = game.add.sprite(WIDTH / 2, HEIGHT / 2 - 200, 'menu-heart');
        heart.scale.set(HEIGHT / start.height, HEIGHT / start.height);
        heart.animations.add('flow', [0, 1, 2, 3, 4, 5, 6], 10, true);
        heart.animations.play('flow', null, true);

    }

    function startGame() {
        timeSinceLastGame = game.time.now;
        game.state.start('play');
    }
    return {
        preload: function() {
            game.load.image('menu-bg', 'assets/menu-bg.png');
            game.load.image('menu-mask', 'assets/menu-mask.png');
            game.load.image('mask', 'assets/mask.png');
            game.load.image('menu-start', 'assets/menu-start.png');
            game.load.spritesheet('menu-heart', 'assets/heart.png', 228, 183);
        },
        create: function() {
            menu = game.add.image(WIDTH / 2, HEIGHT / 2, 'menu-bg');
            menu.anchor.setTo(0.5, 0.5);
            menu.scale.set(HEIGHT / menu.height, HEIGHT / menu.height);

            mask = game.add.image(WIDTH / 2, HEIGHT / 2, 'menu-mask');
            mask.anchor.setTo(0.5, 0.5);
            mask.scale.set(HEIGHT / mask.height, HEIGHT / mask.height);
            mask.inputEnabled = true;
            mask.events.onInputDown.add(showStart, game);

            game.add.tween(mask).to({alpha: 0}, 500, null, true, 0, -1, true);
        },
        update: function() {

        }
    }
}());
