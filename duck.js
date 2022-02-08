const ap = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: true,
    lrcType: false,
    mutex: true,
    preload: 'auto',
    audio: [{
        name: 'duck radio',
        artist: 'duckr',
        url: 'uwu.ogg',
        cover: 'duck.png',
        theme: '#ebe857',
        loop: 'none'
    }]
});

let init = false;
let init2 = false;

ap.on('play', function () {
    if (init) {
        if (!init2) ap.list.remove(0);
        init2 = true;
        return;
    }
    init = true;
    ap.addAudio([
            {
                name: 'duck radio',
                artist: 'duckr',
                url: 'http://radio.letonet.fr:8000/duck-radio',
                cover: 'duck.png',
                theme: '#ebe857'
            }
        ])
});
