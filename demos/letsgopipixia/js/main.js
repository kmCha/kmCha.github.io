
window.onload = function() {
    // 判断横屏竖屏
    var forhorview = $("#forhorview");
    // 判断是否是以竖屏打开的页面
    var openedVertically = window.orientation == 0 || window.orientation == 180;
    if (openedVertically) {
        forhorview.show();
        $(window).bind("orientationchange", function() {
            window.location.reload();
        });
    } else {
        $(window).bind("orientationchange", function() {
            if (window.orientation == 90 || window.orientation == -90) {
                forhorview.hide();
                return false;
            } else if (window.orientation == 0 || window.orientation == 180) {
                forhorview.show();
                return false;
            }
        });
    }
    WIDTH = window.innerWidth > 667 ? 667 : window.innerWidth;
    HEIGHT = window.innerHeight > 375 ? 375 : window.innerHeight;

    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    // grab an audio context
    audioContext = new AudioContext();

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

        // ask for an audio input
        navigator.getUserMedia(
            {
                "audio": {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                },
            }, gotStream, didntGetStream);
        } catch (e) {
            alert('你使用的浏览器不支持麦克风，请用下方按键操作，左下角移动，右下角跳跃');
        }
        initPhaser();

        setInterval(function() {
            // 将页面滑动到最底，防止safari的地址栏占位
            document.body.scrollTop = HEIGHT
        }, 200);
    }

    function didntGetStream(e) {
        alert('你使用的浏览器不支持麦克风，请用下方按键操作，左下角移动，右下角跳跃');
        // alert(e.name);
    }


    function gotStream(stream) {
        // Create an AudioNode from the stream.
        var mediaStreamSource = audioContext.createMediaStreamSource(stream);

        // Create a new volume meter and connect it.
        meter = createAudioMeter(audioContext);
        mediaStreamSource.connect(meter);
        support = true;

        // kick off the visual updating
        // initPhaser();
    }

    function initPhaser() {
        game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', null, true);
        game.state.add('video', videoState);
        game.state.add('play', playState);
        game.state.add('menu', menuState);
        game.state.add('gameOver', gameOverState);
        game.state.add('gameComplete', gameCompleteState);

        game.state.start('video');
    }
