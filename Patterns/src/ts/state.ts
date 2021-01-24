// The statemachine class. this class contains an instance of state.
// With this instance it can set it to different states ex: GameState, PauseState
// This can then be used to call functions from the current state.
export class StateMachine {

    private state: State;

    constructor(state: State) {
        this.set_state(state);
    }

    public set_state(state: State): void {
        console.log("StateMachine: Transition to " + state.constructor.name);
        this.state = state;
        this.state.set_machine(this);
    }

    public current_state(): string{
        return this.state.constructor.name;
    }

    public request_display(): void {
        this.state.display();
    }

    public request_event(): void {
        this.state.event();
    }
}

// Abstract class state, new implementations of states will inherit this.
abstract class State {
    protected stateMachine: StateMachine;

    public set_machine(stateMachine: StateMachine) {
        this.stateMachine = stateMachine;
    }

    public abstract display(): void;

    public abstract event(): void;
}

// Pause state that has a display and event function
// For test purposes they print out a text
export class GameState extends State {
    public display(): void {
        console.log('Display the game');
        this.stateMachine.set_state(new PauseState());
    }

    public event(): void {
        console.log('Handle events in game state');
        this.stateMachine.set_state(new PauseState());

    }
}

// Pause state that has a display and event function
// For test purposes they print out a text
export class PauseState extends State {
    public display(): void {
        console.log('Display the pause menu');
        this.stateMachine.set_state(new GameState());

    }

    public event(): void {
        console.log('Handle events in pause state');
        this.stateMachine.set_state(new GameState());
    }
}

