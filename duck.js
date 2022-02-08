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
    ap.notice('Welcome to the duckstream', 2000);
    ap.addAudio([
            {
                name: 'duck radio',
                artist: 'duckr',
                url: 'http://educadora.ntelecom.com.br:18120/stream',
                cover: 'duck.png',
                theme: '#ebe857'
            }
        ])
});
