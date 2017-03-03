var videoState = (function() {
    var video;

    return {
        preload: function() {
            var text = game.add.text(WIDTH / 2, HEIGHT / 2, "加载中...", { font: "35px Arial", fill: "#000000" });
            text.anchor.set(0.5, 0.5);
            // game.load.video('start', 'assets/start.mp4');
            game.load.spritesheet('talk', 'assets/start-talk.jpg', 640, 360);
        },
        create: function() {
            video = game.add.sprite(WIDTH / 2, HEIGHT / 2, 'talk');
            video.scale.set(WIDTH / video.width, HEIGHT / video.height);
            video.anchor.setTo(0.5, 0.5);
            video.animations.add('talk', [0, 1, 2, 3], 0.4, false);
            video.animations.play('talk');

            video.animations.currentAnim.onComplete.add(function() {
                game.state.start('menu')
            })
        },
        update: function() {
        }
    }
}());
