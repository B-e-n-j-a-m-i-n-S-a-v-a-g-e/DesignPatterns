class DragonContext {

    private state: IDragonState;

    constructor() {
        this.state = null;
    }

    setState(state: IDragonState) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}