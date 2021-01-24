// Interface for the subject
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

// Physics class that implements the subject.
// This has functions to attach, detach and notify observers.
// It also has a function to test notify().
class Physics implements Subject {

    public state: number = 0;
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log("Subject: Observer has been attached already.");
        }

        console.log("Subject: Attached an observer.");
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return console.log("Subject: Nonexistent observer.");
        }

        this.observers.splice(observerIndex, 1);
        console.log("Subject: Detached an observer.");
    }

    public notify(): void {
        console.log("Subject: Notifying observers...");
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    public jump(): void {
        console.log("Jumping");
        this.state = 1;
        this.notify();
    }
}

// Interface for an observer
interface Observer {
    // Receive update from subject.
    update(subject: Subject): void;
}

// Achievement class, this implements the observer.
// When this observer is notified it will check if the subject jumped and will print.
class Achievement implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof Physics && subject.state == 1) {
            console.log("Achievement Unlocked!");
        }
    }
}

// Test the observer by attaching and detaching.
export function test_observer(){
    console.log("");
    const subject = new Physics();

    const observer = new Achievement();
    subject.attach(observer);
    
    subject.jump();
    
    subject.detach(observer);
    
    subject.jump();
}
