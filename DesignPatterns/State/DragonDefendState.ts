class DragonDefendState implements IDragonState {

    setState(context: DragonContext) {
        console.log("Dragon is in defensive mode.");
        context.setState(this);
    }   

    toString() {
        return "Dragon Defend.";
    }
}