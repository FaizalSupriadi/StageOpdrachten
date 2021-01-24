import * as PIXI from 'pixi.js';
import {Snake} from "./ts/snake.ts";
import {Food} from "./ts/food.ts";

let Width = 256;
let Height = 256;

let app = new PIXI.Application({ 
    width: Width, 
    height: Height,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);

let food = new Food(app);
let snake = new Snake(app, Width, Height);

document.body.appendChild(app.view);
document.addEventListener('keydown', event =>{
    snake.move(event);
});

app.ticker.add(delta => gameLoop(delta));

function gameLoop(delta){
    snake.update()
}