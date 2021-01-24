// An interface with a function.
interface EnemyInterface{
    attack() : string;
}

// A class that is not compatible with the EnemyInterface.
// This instead has the function shoot().
class Archer{
    public shoot(): string{
       return "Shooting!";
    }
}

// An adapter that makes the Archer class compatible with the EnemyInterface attack() function.
class EnemyAdapter implements EnemyInterface{
    private archer: Archer;

    constructor(){
        this.archer = new Archer();
    }

    public attack(): string{
        return this.archer.shoot();
    }
}

// Testing the adapter by printing the attack.
export function test_adapter(){
    console.log("\nTesting Adapter!");
    let enemy : EnemyInterface  = new EnemyAdapter();
    console.log(enemy.attack());

}