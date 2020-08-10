class MediaPlayer {
    media: HTMLMediaElement; // ya que la etiqueta es video (puede ser audio)
    plugin: Array<any>
    container: HTMLElement;

    constructor(config) {
        this.media = config.el
        this.plugin = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        const player = {
            play: () => this.play(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value){
                if(value === true){
                    this.media.muted = true;
                }else {
                    this.media.muted = false;
                }
            }
        }
        this.plugin.forEach(element => {
            element.run(this);
        });
    }

    play() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }

    mute() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.media.muted = true;
        } 
    }

    unmute() {
        this.media.muted = false;
    }
}


export default MediaPlayer;