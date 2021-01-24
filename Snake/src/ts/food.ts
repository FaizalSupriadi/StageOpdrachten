import * as PIXI from 'pixi.js';

// Food that the snake will eat.
// Not edible yet.
export class Food{
    boxWidth = 32;
    boxHeight = 32;
    box = new PIXI.Graphics();

    constructor(app){
        this.box.beginFill(0x800000);
        this.box.drawRect(0, 0, this.boxWidth, this.boxHeight);
        this.box.endFill();
        this.box.position.set(64,64);

        app.stage.addChild(this.box);
}