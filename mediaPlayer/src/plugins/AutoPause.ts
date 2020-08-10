import MediaPlayer from '../mediaPlayer';

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;
    constructor () {
        this.threshold = 0.25
        this.handler = this.handler.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handler, {
            threshold: this.threshold
        })

        observer.observe(this.player.media);
        
        // visibility change
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handler(entries) {
        // entries son los objetos que estamos observando
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold; // is visible
        (isVisible)
            ? this.player.play()
            : this.player.media.pause()

        console.log(entry); 
    }

    private handleVisibilityChange() {
        const isVisible = document.visibilityState;
        (isVisible === 'hidden')
            ? this.player.media.pause()
            : this.player.play()
    }
}

export default AutoPause;