class Memento {

    state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}