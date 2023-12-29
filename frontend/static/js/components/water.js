import {Wave} from './wave.js';

export class App {

  constructor() {

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });

    /* 웨이브 객체 생성 */
    this.wave = new Wave();

  
    this.resize();

    
    requestAnimationFrame(this.animate.bind(this));
  }


  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;


    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);


    this.wave.resize(this.stageWidth, this.stageHeight);
  }


  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.wave.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

/* 브라우저에 window가 로드 됐을 때, 객체 생성 */
window.onload = () => {
  new App();
};
