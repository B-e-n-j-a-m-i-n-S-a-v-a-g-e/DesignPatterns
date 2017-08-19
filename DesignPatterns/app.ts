window.onload = () => {

    //STRATEGY PATTERN IMPLEMENTATION

    console.log("<<<STRATEGY PATTERN IMPLEMENTATION>>>");

    let blueWizard = new Wizard("Blue Wizard", new FreezeSpell());
    console.log(blueWizard.castSpell());

    let redWizard = new Wizard("Red Wizard", new LightningSpell());
    console.log(redWizard.castSpell());

    let yellowWizard = new Wizard("Yellow Wizard", new FireSpell());
    console.log(yellowWizard.castSpell());


};