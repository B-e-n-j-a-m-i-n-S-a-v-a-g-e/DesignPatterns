class Wizard {

    private strategy: IStrategy;
    private name: string;

    constructor(name: string, strategy: IStrategy) {
        this.name = name;
        this.strategy = strategy;
    }

    getName() {
        return this.name;        
    }

    castSpell() {
        console.log("*** " + this.name + " casts a spell.");
        return this.strategy.castSpell();
    }

}