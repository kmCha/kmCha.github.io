var gameCompleteState = (function() {
    var mask,
        againBtn,
        shareBtn,
        timeCost,
        timeText,
        word;

    return {
        preload: function (){
            game.load.image('again', 'assets/again.png');
            game.load.image('share', 'assets/share.png');
            game.load.image('mask', 'assets/mask.png');
            game.load.image('timeWord', 'assets/time-cost.png');
            game.load.image('word', 'assets/again-word.png');
        },
        create: function() {
            mask = game.add.image(WIDTH/2, HEIGHT/2, 'mask');

            var scaleX = HEIGHT / mask.height,
                scaleY = HEIGHT / mask.height;

            mask.anchor.setTo(0.5, 0.5);
            mask.scale.set(WIDTH / mask.width, HEIGHT / mask.height);

            againBtn = game.add.button(WIDTH/2 - 120, HEIGHT/2 + 140, 'again', this.restartGame, this);
            againBtn.anchor.setTo(0.5, 1);
            againBtn.scale.set(scaleX, scaleY);

            shareBtn = game.add.button(WIDTH/2 + 120, HEIGHT/2 + 140, 'share', this.share, this);
            shareBtn.anchor.setTo(0.5, 1);
            shareBtn.scale.set(scaleX, scaleY);

            word = game.add.image(WIDTH/2 - 40, HEIGHT/2 + 60, 'word');
            word.anchor.setTo(0.5, 0.5);
            word.scale.set(scaleX, scaleY);

            timeCost = game.add.image(WIDTH/2, HEIGHT/2 - 60, 'timeWord');
            timeCost.anchor.setTo(0.5, 0.5);
            timeCost.scale.set(scaleX, scaleY);

            timeText = game.add.text(WIDTH/2 - 30, HEIGHT/2 - 55, time + 's', { fontSize: '42px', fill: '#da8546' });
        },
        update: function() {

        },
        restartGame: function() {
            timeSinceLastGame = game.time.now;
            game.state.start('menu');
        }
    }
}());
