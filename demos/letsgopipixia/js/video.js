var videoState = (function() {
    var video;

    return {
        preload: function() {
            var text = game.add.text(WIDTH / 2, HEIGHT / 2, "Loading...", { font: "35px Arial", fill: "#000000" });
            text.anchor.set(0.5, 0.5);
            game.load.video('start', 'assets/start.mp4');
        },
        create: function() {
            video = game.add.video('start');

            //  x, y, anchor x, anchor y, scale x, scale y
            video.addToWorld(WIDTH / 2, HEIGHT / 2, 0.5, 0.5, WIDTH / video.width, HEIGHT / video.height);

            video.play(true);
            video.loop = false;

            // video.onComplete = function() {
            //     game.state.start('play');
            // };
        },
        update: function() {
            if (video.progress == 1) {
                game.state.start('menu');
            }
        }
    }
}());
