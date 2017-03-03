var volumeState = (function() {
    var volumeText,
        timeText,
        maxVolume = 0,
        time = 0;
    return {
        preload: function() {
            volumeText = game.add.text(WIDTH / 2, HEIGHT / 2, "0", { font: "35px Arial", fill: "#000000" });
            volumeText.anchor.setTo(0.5, 0.5);

            timeText = game.add.text(WIDTH / 2, HEIGHT / 2 + 50, "还剩：", { font: "35px Arial", fill: "#000000" });
            timeText.anchor.setTo(0.5, 0.5);

            var text = game.add.text(WIDTH / 2, HEIGHT / 2 - 50, "少侠，来，给你10秒，使劲吼一声，让我看看你能吼多响", { font: "15px Arial", fill: "#000000" });
            text.anchor.setTo(0.5, 0.5);
        },
        create: function() {
            time = Math.floor(game.time.now / 1000);
        },
        update: function() {
            var volume = meter ? meter.volume * 1000 : 0,
                timeRemain = 10 - (Math.floor(game.time.now / 1000) - time);

            if (timeRemain === 0) {
                volumeRatio = 700 / maxVolume;
                game.state.start('play');
                return;
            }

            if (volume > maxVolume) {
                maxVolume = parseInt(volume);
            }

            volumeText.text = maxVolume;
            timeText.text = '还剩：' + timeRemain + 's!';
        }
    }
}());
