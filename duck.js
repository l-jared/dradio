const ap = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: true,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'duck radio',
        artist: 'duckr',
        url: 'uwu.ogg',
        cover: 'duck.png',
        theme: '#ebe857'
    }]
});

let init = false;

ap.on('play', function () {
    if (init) return;
    init = true;
    console.log('loadstart');
    //ap.volume(0.1, true);
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
