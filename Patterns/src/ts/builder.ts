// Builder interface
interface Builder {
    produce_roof(): void;
    produce_walls(): void;
    produce_door(): void;
}

// Housebuilder class, this implements the builder interface.
// This will produce parts of the house or reset it.
class HouseBuilder implements Builder {
    private product: House ;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new House();
    }

    public produce_roof(): void {
        this.product.parts.push("Roof");
    }

    public produce_walls(): void {
        this.product.parts.push("Walls");
    }

    public produce_door(): void {
        this.product.parts.push("Door");
    }

    public get_product(): House {
        const result = this.product;
        this.reset();
        return result;
    }
}

// A house class, this is what is being made.
// With the list_parts() function you can see what house parts are produced.
class House {
    public parts: string[] = [];

    public list_parts(): void {
        console.log("Product parts: " + this.parts.join(", ") +"\n");
    }
}

// The director class, this class has functions to easily use the functions from the builder.
class Director {
    private builder: Builder;

    public set_builder(builder: Builder): void {
        this.builder = builder;
    }

    public build_minimal(): void {
        this.builder.produce_roof();
    }

    public build_full(): void {
        this.builder.produce_roof();
        this.builder.produce_walls();
        this.builder.produce_door();
    }
}

// Testing the builder pattern by testubg the director and the builder.
export function test_builder() {
    const director = new Director();
    const builder = new HouseBuilder();
    director.set_builder(builder);

    console.log("\nCreate minimal house");
    director.build_minimal();
    builder.get_product().list_parts();

    console.log("Create full house");
    director.build_full();
    builder.get_product().list_parts();

    console.log("Create custom house");
    builder.produce_roof();
    builder.produce_door();
    builder.get_product().list_parts();
}
