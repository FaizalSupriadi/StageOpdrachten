import {Vector2D} from "./vector.ts"
import * as PIXI from 'pixi.js';

// The snake that moves through the field and eats the food.
// For now you can move the snake.
// No food collision/tail expanding yet.
export class Snake{
    position: Vector2D = new Vector2D(0,0);
    velocity: Vector2D = new Vector2D(0,0);
    speed:number = 2;

    boxWidth = 32;
    boxHeight = 32;
    box = new PIXI.Graphics();

    windowWidth: number= 0;
    windowHeight: number= 0;;
    
    constructor(app, width, height){
        this.box.beginFill(0x008000);
        this.box.drawRect(0, 0, this.boxWidth, this.boxHeight);
        this.box.endFill();

        this.windowWidth = width-1;
        this.windowHeight = height-1;

        app.stage.addChild(this.box);
        

    }
    public move(key){
        
        // W Key is 87
        // Up arrow is 87
        if (key.keyCode === 87 || key.keyCode === 38) {
            this.position.y--;
            this.velocity.y=-1;
            this.velocity.x=0;
        }
        
        // S Key is 83
        // Down arrow is 40
        if (key.keyCode === 83 || key.keyCode === 40) {
            this.position.y++;
            this.velocity.y=1;
            this.velocity.x=0;
        }
        
        // A Key is 65
        // Left arrow is 37
        if (key.keyCode === 65 || key.keyCode === 37) {
            this.position.x--;
            this.velocity.x=-1;
            this.velocity.y=0;

        }
        
        // D Key is 68
        // Right arrow is 39
        if (key.keyCode === 68 || key.keyCode === 39) {
            this.position.x++;
            this.velocity.x=1;
            this.velocity.y=0;
        }
          
    }
    public update(){
        this.position.x += this.velocity.x * this.speed;
        this.position.y += this.velocity.y * this.speed;
        console.log( this.position.y);
        if(this.position.x < 0) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        if(this.position.y < 0) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        if(this.position.x > this.windowWidth-this.boxWidth) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        if(this.position.y > this.windowHeight-this.boxHeight) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        }
        this.box.position.set(this.position.x, this.position.y);
    }

}