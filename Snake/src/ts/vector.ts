// Using vectors to make position calculations easier
export class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    set(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    equals(v: Vector2D): boolean {
        return this.x == v.x && this.y == v.y;
    }
}