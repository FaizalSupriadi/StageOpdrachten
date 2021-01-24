// Create superclass block with function print
class Block{
    constructor(){}
    public print(): void{};
}

// Extend from block.
class Grass extends Block{
    constructor(){
        super();
    }
    public print(): void{ console.log("Grass"); };

}

// Extend from block.
class Dirt extends Block{
    constructor(){
        super();
    }
    public print(): void{ console.log("Dirt"); };

}

// Extend from block.
class Water extends Block{
    constructor(){
        super();
    }
    public print(): void{ console.log("Water"); };

}

// Blockfactory will create and return the blocktype that is called upon.
export class BlockFactory {
    public create(blockType: string): Block {
      switch (blockType) {
        case "grass":
            return new Grass();
  
        case "dirt":
            return new Dirt();
  
        case "water":
            return new Water();
  
        default:
            throw new Error('Unknown message block type: ' + blockType);
        }
    }
}

// Randomly choose a block
export function random_block(): string{
    
    let list = ["grass", "dirt", "water"];
    let index = Math.floor(Math.random() * Math.floor(list.length));
    return list[index]
}