﻿window.onload = () => {

    //STRATEGY PATTERN IMPLEMENTATION

    console.log("<<<STRATEGY PATTERN IMPLEMENTATION>>>");

    let blueWizard = new Wizard("Blue Wizard", new FreezeSpell());
    console.log(blueWizard.castSpell());

    let redWizard = new Wizard("Red Wizard", new LightningSpell());
    console.log(redWizard.castSpell());

    let yellowWizard = new Wizard("Yellow Wizard", new FireSpell());
    console.log(yellowWizard.castSpell());


    //FACTORY PATTERN IMPLEMENTATION

    console.log("<<<FACTORY PATTERN IMPLEMENTATION>>>");

    let heroFactory = new HeroFactory();

    let factory = heroFactory.getHero("Fighter");
    console.log(factory.spawnHero());

    factory = heroFactory.getHero("Mage");
    console.log(factory.spawnHero());

    factory = heroFactory.getHero("Thief");
    console.log(factory.spawnHero());


    //MEMENTO PATTERN IMPLEMENTATION

    console.log("<<<MEMENTO PATTERN IMPLEMENTATION>>>");

    let originator = new Sorcerer();
    let caretaker = new Caretaker();

    originator.setState("Casting lightning spell");
    originator.setState("Casting water spell");
    caretaker.addSpell(originator.saveStateToMemento());

    originator.setState("Casting lava spell");
    caretaker.addSpell(originator.saveStateToMemento());

    originator.setState("Casting popcorn spell");
    console.log("Current state: " + originator.getState());

    originator.getStateFromMemento(caretaker.retrieveSpell(0));
    console.log("First saved state: " + originator.getState());

    originator.getStateFromMemento(caretaker.retrieveSpell(1));
    console.log("Second saved state: " + originator.getState());


};