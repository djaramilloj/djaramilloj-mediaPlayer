import MediaPlayer from '@djaramilloj1/mediaplayer/src/mediaPlayer';
import AutoPlay from '@djaramilloj1/mediaplayer/src/plugins/AutoPlay';
import AutoPause from '@djaramilloj1/mediaplayer/src/plugins/AutoPause';
import Ads from '@djaramilloj1/mediaplayer/src/plugins/ads';

const video =  document.querySelector('video');
const play: HTMLElement = document.getElementById('playPause');
const mute: HTMLElement = document.getElementById('mute');


const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads(),
]});
play.onclick = () => player.play(); 
mute.onclick = () => player.mute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .catch(e => {
            console.error(`hubo un error: ${e}`);
        })
}