import { BlockFactory, random_block } from "./ts/factory.ts"
import { test_singleton } from "./ts/singleton.ts"
import { StateMachine, PauseState } from "./ts/state.ts"
import { test_adapter } from "./ts/adapter.ts"
import { test_strategy } from "./ts/strategy.ts"
import { test_facade } from "./ts/facade.ts"
import { test_builder } from "./ts/builder.ts"
import { test_observer } from "./ts/observer.ts"
import { test_pool } from "./ts/pool.ts"

const blockBtn = document.getElementById("blockBtn")!;
const stateBtn1 = document.getElementById("stateBtn1")!;
const stateBtn2 = document.getElementById("stateBtn2")!;

let factory = new BlockFactory();
const machine = new StateMachine(new PauseState());

blockBtn.addEventListener("click", function(){
    let block = factory.create(random_block());
    block.print();
});  
stateBtn1.addEventListener("click", function(){
    console.log("")
    let currState = machine.current_state();
    console.log(currState);
    machine.request_display();

});
stateBtn2.addEventListener("click", function(){
    console.log("")
    let currState = machine.current_state();
    console.log(currState);
    machine.request_event();

});

test_singleton();
test_adapter();
test_strategy();
test_facade();
test_builder();
test_observer();
test_pool();