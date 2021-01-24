import * as PIXI from 'pixi.js';

export class TextureManager{
    constructor(){

    }

    public load_texture(name:string, image:any){
        PIXI.Loader.shared.add(name, image);
    }

}




function setup(){
    let snake = new Sprite(resources[name].texture);
    app.stage.addChild(snake);
}