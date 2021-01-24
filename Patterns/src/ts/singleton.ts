// Singleton class, this class contains an instance of itself.
// Once this class is called upon it will check whether it already exists.
// If it does not exist it will create an instance of itself and will only give this instance in subsequent calls.
// The print functions is to check how many times the singleton is created.

class Singleton {
    private static instance: Singleton;
    
    private constructor() {this.print();}

    public static get_instance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
    public print() {
        console.log("Singleton created!" )
    }
}

// This function will test the singleton by using the get_instance function twice and comparing eachother.
export function test_singleton() {
    console.log("\nTesting Singleton!");
    const s1 = Singleton.get_instance();
    const s2 = Singleton.get_instance();

    if (s1 == s2) {
        console.log('Singleton works');

    } else {
        console.log('Singleton failed');

    }
}

