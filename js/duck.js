const ap = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: true,
    lrcType: 1,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'welcome',
        artist: 'duckr',
        url: 'theduckradio.ogg',
        cover: 'img/duck.png',
        theme: '#ebe857',
        loop: 'none',
        lrc: '[00:00.00]welcome to the duckstream\n[00:02.10]​[00:02.14]uwu'
    }]
});

let init0 = false;
let init = false;

function wait(ms) {
  return new Promise(rs => setTimeout(rs, ms));
}

let player;

function dradio() {
    var m = new Date();
    const cur = m.getUTCFullYear() +"-"+ (m.getUTCMonth()+1) +"-"+ m.getUTCDate();
    fetch("https://api.countapi.xyz/get/dradio/"+cur).then(response => response.json()).then(data => document.getElementById("viewers").innerText = data.value + " viewers");
}

ap.on('play', async function () {
    init0 = true;

    if (ap.list.index > 0) {
        /*
        player = new IcecastMetadataPlayer("https://radio.letonet.fr:8000/duck-radio", {
          onMetadata: (metadata) => {
            const stuff = metadata["TITLE"].split(/ - (.*)/);
            document.querySelector(".aplayer-title").innerText = stuff[1];
            document.querySelector(".aplayer-author").innerText = " - "+stuff[0];
          },
          audioElement: ap.audio,
          metadataTypes: ["ogg"]
        });
        */
        //await player.play();
        await wait(100);
        ap.list.remove(0);
        //ap.notice('Welcome to the duckstream', 2000);
        return;
    }
    if (!init) {
    init = true;
    const dicks = localStorage.getItem("last");
    var m = new Date();
    const cur = m.getUTCFullYear() +"-"+ (m.getUTCMonth()+1) +"-"+ m.getUTCDate();
    if (!dicks || cur != dicks) {
        localStorage.setItem("last", cur);
        fetch("https://api.countapi.xyz/hit/dradio/"+cur).then(response => response.json()).then(data => document.getElementById("viewers").innerText = data.value + " viewers today");
    } else {
        dradio();
    }
    setInterval(dradio, 60000);
    ap.addAudio([
            {
                name: 'duck radio',
                artist: 'duckr',
                url: 'https://radio.letonet.fr:8000/duck-radio',
                cover: 'img/duck.png',
                theme: '#ebe857',
                lrc: '[00:00.00]With your host: theduckr'
            }
        ])
    }
});

async function dicks() {
    init0 = true;
    await ap.play();
}

//document.addEventListener('mousedown', () => {if (!init0) {init0=true;ap.play();}})
document.addEventListener('click', () => {if (!init0) {dicks();}})