const ap = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: true,
    lrcType: false,
    mutex: true,
    preload: 'none',
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

function wait(ms) {
  return new Promise(rs => setTimeout(rs, ms));
}

ap.on('play', async function () {
    await wait(1000);

    if (init) {
        if (!init2) {
            ap.list.remove(0);
            ap.notice('Welcome to the duckstream', 2000);
        }
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

document.addEventListener('mousedown', () => {if (!init) {ap.play()}})
document.addEventListener('click', () => {if (!init) {ap.play()}})
