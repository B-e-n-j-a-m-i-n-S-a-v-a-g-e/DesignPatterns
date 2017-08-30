window.onload = () => {

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


    //FACADE PATTERN IMPLEMENTATION

    console.log("<<<FACADE PATTERN IMPLEMENTATION>>>");

    let orcArmyMaker = new OrcArmyMaker();

    orcArmyMaker.addOrcArcher();
    orcArmyMaker.addOrcCommander();
    orcArmyMaker.addOrcBerserker();

    //STATE PATTERN IMPLEMENTATION

    console.log("<<<STATE PATTERN IMPLEMENTATION>>>");

    let context = new DragonContext();

    let attackState: DragonAttackState = new DragonAttackState();
    attackState.setState(context);

    console.log(context.getState().toString());

    let defendState: DragonDefendState = new DragonDefendState();
    defendState.setState(context);

    console.log(context.getState().toString());

    //MEDIATOR PATTERN IMPLEMENTATION

    console.log("<<<MEDIATOR PATTERN IMPLEMENTATION>>>");

    let mindReader1 = new MindReader("Zfftlllar");
    let mindReader2 = new MindReader("Hanyrroptus");

    mindReader1.sendMentalMessage("Why good day to you, Hanyrroptus!");
    mindReader2.sendMentalMessage("Why hello to YOU, Zfftlllar!"); 

    /*
    //BUILDER PATTERN IMPLEMENTATION

    console.log("<<<BUILDER PATTERN IMPLEMENTATION>>>");

    let mealBuilder = new MealBuilder();

    let vegMeal = mealBuilder.prepareVegMeal();
    console.log("Veg meal");
    vegMeal.showItems();
    console.log("Total cost: " + vegMeal.getCost());

    let nonVegMeal = mealBuilder.prepareNonVegMeal();
    console.log("\n NonVeg Meal");
    nonVegMeal.showItems();
    console.log("Total cost: " + nonVegMeal.getCost());
    */
    ////FYLWEIGHT PATTERN IMPLEMENTATION

    let colors: string[] = ["Red", "Green", "Blue", "White", "Black"];

    for (let i = 0; i < 20; i++) {

        let circle = ShapeFactory.getCircle(this.getRandomColor());
        //circle.setX(this.getRandomX());
        //circle.setY(this.getRandomY());
        //circle.getRadius(100);
        //circle.draw();
    }

    function getRandomNumber() {
        return colors[Math.random() * colors.length];
    }

    function getRandomX() {
        return Math.random() * 100;
    }
    function getRandomY() {
        return Math.random() * 100;
    }

};