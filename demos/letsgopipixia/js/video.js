var video;
var videoState = {
    preload: function() {
        game.add.text(100, 100, "Loading videos ...", { font: "65px Arial", fill: "#ffffff" });
        game.load.video('start', 'assets/start.mp4');
    },
    create: function() {
        video = game.add.video('start');

        video.play(true);
        video.loop = false;

        //  x, y, anchor x, anchor y, scale x, scale y
        video.addToWorld(WIDTH / 2, HEIGHT / 2, 0.5, 0.5, WIDTH / video.width, HEIGHT / video.height);

        // video.onComplete = function() {
        //     game.state.start('play');
        // };
    },
    update: function() {
        if (video.progress == 1) {
            game.state.start('play');
        }
    }
}
