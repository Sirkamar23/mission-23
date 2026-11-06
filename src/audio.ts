import {config} from './config';
class Sound {
  ctx: AudioContext | null = null; music: HTMLAudioElement | null = null; muted = false; timer = 0;
  async start() {
    try { this.ctx ??= new AudioContext(); await this.ctx.resume(); } catch { /* Silent fallback */ }
    if(config.music.src && !this.music) {
      this.music = new Audio(config.music.src); this.music.loop = config.music.loop; this.music.volume = 0;
      this.music.addEventListener('error', () => { this.music = null; }, {once:true});
    }
    if(this.music && !this.muted) { try { await this.music.play(); this.fade(config.music.volume); } catch { /* Next gesture can retry */ } }
  }
  fade(target:number) { window.clearInterval(this.timer); const m=this.music; if(!m)return; this.timer=window.setInterval(()=>{m.volume += (target-m.volume)*.12; if(Math.abs(m.volume-target)<.005){m.volume=target;clearInterval(this.timer); if(target===0 && this.muted)m.pause();}},40); }
  toggle(){this.muted=!this.muted; if(this.muted)this.fade(0); else void this.start(); return this.muted;}
  note(index:number){
    if(this.muted)return; void this.start(); const c=this.ctx;if(!c)return;
    const osc=c.createOscillator(), gain=c.createGain();const t=c.currentTime;
    osc.type='sine';osc.frequency.value=[261.63,311.13,349.23,392,466.16,523.25][index%6];
    gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.16,t+.025);gain.gain.exponentialRampToValueAtTime(.001,t+1.4);
    osc.connect(gain);gain.connect(c.destination);osc.start(t);osc.stop(t+1.5);
    if(this.music){this.fade(config.music.volume*.4);window.setTimeout(()=>{if(!this.muted)this.fade(config.music.volume)},650);}
  }
}
export const sound=new Sound();
