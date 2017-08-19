class Sorcerer {

    state: string;

    getState() {
        return this.state;
    }

    setState(newState: string) {
        this.state = newState;
    }

    saveStateToMemento() {
        return new Memento(this.state);
    }

    getStateFromMemento(memento: Memento) {
        this.state = memento.getState();
    }
}
