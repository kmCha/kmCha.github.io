var gameOverState = (function() {
    var mask,
        restartBtn,
        repickBtn;
    return {
        preload: function() {
            $('.play-state-wrap').show();
            game.load.image('mask', 'assets/mask.png');
            game.load.image('restartBtn', 'assets/restart.png');
            game.load.image('repickBtn', 'assets/repick.png');
        },
        create: function() {
            mask = game.add.image(WIDTH/2, HEIGHT/2, 'mask');

            var scaleX = WIDTH / mask.width,
                scaleY = HEIGHT / mask.height;

            mask.anchor.setTo(0.5, 0.5);
            mask.scale.set(scaleX, scaleY);

            restartBtn = game.add.button(WIDTH/2 + 25, HEIGHT/2 - 60, 'restartBtn', this.restartGame, this);
            restartBtn.anchor.setTo(0.5, 0.5);
            restartBtn.scale.set(scaleX, scaleY);

            repickBtn = game.add.button(WIDTH/2, HEIGHT/2 + 70, 'repickBtn', this.repickCp, this);
            repickBtn.anchor.setTo(0.5, 0.5);
            repickBtn.scale.set(scaleX, scaleY);
        },
        update: function() {
            // tween = game.add.tween(mask).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0);
            // tween.onComplete.add(this.restartGame);
        },
        restartGame: function() {
            timeSinceLastGame = game.time.now;
            game.state.start('play');
        },
        repickCp: function() {
            $('.play-state-wrap').hide();
            game.state.start('menu');
        }
    };
}());
