var gameOverState = {
    preload: function() {
        game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
    },
    create: function() {
        var overText = game.add.text(WIDTH/2, HEIGHT/2, '死的好惨😭', { fontSize: '32px', fill: '#fff' });
        overText.anchor.setTo(0.5, 0.5);

        var button = game.add.button(WIDTH/2, HEIGHT/2 + 80, 'button', this.restartGame, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
    },
    update: function() {
        // tween = game.add.tween(mask).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0);
        // tween.onComplete.add(this.restartGame);
    },
    restartGame: function() {
        timeSinceLastGame = game.time.now;
        game.state.start('play');
    }
}
