// The context where the strategy will be used.
// It can change the strategy and execute the algorithm.
class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.set_strategy(strategy);
    }

    public set_strategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public execute_algorithm(): void {

        console.log("Sorting array");
        const result = this.strategy.algorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));

    }
}
// Interface for a strategy.
interface Strategy {
    algorithm(data: string[]): string[];
}

// A normal sort strategy
class Sort implements Strategy {
    public algorithm(data: string[]): string[] {
        return data.sort();
    }
}
// A reverse strategy
class Reverse implements Strategy {
    public algorithm(data: string[]): string[] {
        return data.reverse();
    }
}

// Testing the strategy changing the strategy midway
export function test_strategy(){
    console.log("")
    const context = new Context(new Sort());
    console.log('Strategy: Normal sort');
    context.execute_algorithm();
    console.log('Strategy: Reverse sort');
    context.set_strategy(new Reverse());
    context.execute_algorithm();
}