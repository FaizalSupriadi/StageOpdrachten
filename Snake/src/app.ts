import * as PIXI from 'pixi.js';
import snakePart from "./images/snake.png";

let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    resources = PIXI.Loader.shared.resources,
    Sprite = PIXI.Sprite;

let app = new Application({ 
    width: 256, 
    height: 256,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);

const FPS:number = 60;
const frameDelay:number = 1000 / FPS;
let running: bool = true;

document.body.appendChild(app.view);
loader.add("snake", snakePart).load(setup);
let snake = new Sprite(resources["snake"].texture);
app.stage.addChild(snake);

function setup(){

    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

}
