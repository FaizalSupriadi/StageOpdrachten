// Facade class, in this case it's a scoreboard.
// This contains subsystems and will use their functions in one function.
class Scoreboard {
    protected scoreInput: ScoreInput;

    protected score: Score;

    constructor(scoreInput: ScoreInput = null, score:Score = null ) {
        this.scoreInput = scoreInput || new ScoreInput();
        this.score = score || new Score();
    }

    public operation(): string {
        let result = 'Scoreboard:\n';
        result += this.scoreInput.input_score();
        result += this.score.get_score();

        return result;
    }
}

// Example of a subsystem for a facade
// A way to input a score, but in this case it will return a string
class ScoreInput  {
    public input_score(): string {
        return 'Input!\n';
    }
}

// Example of a subsystem for a facade
// A way to get a score, but in this case it will return a string
class Score {
    public get_score(): string {
        return 'Score is ...\n';
    }
}

// Testing the facade by calling the operation() function.
export function test_facade() {
    const scoreInput = new ScoreInput();
    const score = new Score();
    const scoreboard = new Scoreboard(scoreInput, score);
    console.log("\n"+scoreboard.operation());

}
