class DragonAttackState implements IDragonState {

    setState(context: DragonContext) {
        console.log("Dragon is in attack state");
        context.setState(this);
    }
    toString() {
        return "Dragon Attack.";
    }
}