var gameCompleteState = {
    preload: function (){
        game.load.spritesheet('button', '../assets/button_sprite_sheet.png', 193, 71);
    },
    create: function() {
        var overText = game.add.text(WIDTH/2, HEIGHT/2, '完成时间：' + time + 's', { fontSize: '32px', fill: '#fff' });
        overText.anchor.setTo(0.5, 0.5);

        var button = game.add.button(WIDTH/2, HEIGHT/2 + 80, 'button', this.restartGame, this, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
    },
    update: function() {

    }
}
