var _this = this;
window.onload = function () {
    //STRATEGY PATTERN IMPLEMENTATION
    console.log("<<<STRATEGY PATTERN IMPLEMENTATION>>>");
    var blueWizard = new Wizard("Blue Wizard", new FreezeSpell());
    console.log(blueWizard.castSpell());
    var redWizard = new Wizard("Red Wizard", new LightningSpell());
    console.log(redWizard.castSpell());
    var yellowWizard = new Wizard("Yellow Wizard", new FireSpell());
    console.log(yellowWizard.castSpell());
    //FACTORY PATTERN IMPLEMENTATION
    console.log("<<<FACTORY PATTERN IMPLEMENTATION>>>");
    var heroFactory = new HeroFactory();
    var factory = heroFactory.getHero("Fighter");
    console.log(factory.spawnHero());
    factory = heroFactory.getHero("Mage");
    console.log(factory.spawnHero());
    factory = heroFactory.getHero("Thief");
    console.log(factory.spawnHero());
    //MEMENTO PATTERN IMPLEMENTATION
    console.log("<<<MEMENTO PATTERN IMPLEMENTATION>>>");
    var originator = new Sorcerer();
    var caretaker = new Caretaker();
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
    var orcArmyMaker = new OrcArmyMaker();
    orcArmyMaker.addOrcArcher();
    orcArmyMaker.addOrcCommander();
    orcArmyMaker.addOrcBerserker();
    //STATE PATTERN IMPLEMENTATION
    console.log("<<<STATE PATTERN IMPLEMENTATION>>>");
    var context = new DragonContext();
    var attackState = new DragonAttackState();
    attackState.setState(context);
    console.log(context.getState().toString());
    var defendState = new DragonDefendState();
    defendState.setState(context);
    console.log(context.getState().toString());
    //MEDIATOR PATTERN IMPLEMENTATION
    console.log("<<<MEDIATOR PATTERN IMPLEMENTATION>>>");
    var mindReader1 = new MindReader("Zfftlllar");
    var mindReader2 = new MindReader("Hanyrroptus");
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
    var colors = ["Red", "Green", "Blue", "White", "Black"];
    for (var i = 0; i < 20; i++) {
        var circle = ShapeFactory.getCircle(_this.getRandomColor());
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
//class Bottle implements IPacking {
//    pack() {
//        return "Bottle";
//    }
//} 
//abstract class Burger implements IItem {
//    packing() {
//        return new Wrapper();
//    }
//    abstract price();
//    abstract name();
//} 
//class ChickenBurger extends Burger {
//    price() {
//        return 50.5;
//    }
//    name() {
//        return "Chicken Burger";
//    }
//} 
//class Coke extends ColdDrink {
//    price() {
//        return 30.0;
//    }
//    name() {
//        return "Coke";
//    }
//} 
//abstract class ColdDrink implements IItem {
//    packing() {
//        return new Bottle();
//    }
//    abstract price();
//    name() { }
//} 
//interface IItem {
//    name();
//    packing();
//    price();
//} 
//interface IPacking {
//    pack();
//} 
//class Meal {
//    private items: IItem[] = [];
//    addItem(item: IItem) {
//        this.items.push(item);
//    }
//    getCost() {
//        let cost = 0.0;
//        for (let i = 0; i < this.items.length; i++) {
//            cost += this.items[i].price();
//        }
//        return cost;
//    }
//    showItems() {
//        for (let i = 0; i < this.items.length; i++) {
//            console.log("Item: " + this.items[i].name);
//            console.log(", Packing: " + this.items[i].packing().pack());
//            console.log(", Price: " + this.items[i].price());
//        }
//    }
//} 
//class MealBuilder {
//    prepareVegMeal() {
//        let meal = new Meal();
//        meal.addItem(new VegBurger());
//        meal.addItem(new Coke());
//        return meal;
//    } 
//    prepareNonVegMeal() {
//        let meal = new Meal();
//        meal.addItem(new ChickenBurger());
//        meal.addItem(new Pepsi());
//        return meal;
//    }
//} 
//class Pepsi extends ColdDrink {
//    price() {
//        return 35.0;
//    }
//    name() {
//        return "Pepsi";
//    }
//} 
//class VegBurger extends Burger {
//    price() {
//        return 25.0;
//    }
//    name() {
//        return "Veg Burger";
//    }
//} 
//class Wrapper implements IPacking {
//    pack() {
//        return "Wrapper";
//    }
//} 
var OrcCommander = (function () {
    function OrcCommander() {
    }
    OrcCommander.prototype.addToOrcArmy = function () {
        console.log("An orc commander is added to the orc army.");
    };
    return OrcCommander;
})();
var OrcArcher = (function () {
    function OrcArcher() {
    }
    OrcArcher.prototype.addToOrcArmy = function () {
        console.log("An orc archer is added to the orc army.");
    };
    return OrcArcher;
})();
var OrcArmyMaker = (function () {
    function OrcArmyMaker() {
        this.orcArcher = new OrcArcher();
        this.orcCommander = new OrcCommander();
        this.orcBerserker = new OrcBerserker();
    }
    OrcArmyMaker.prototype.addOrcArcher = function () {
        this.orcArcher.addToOrcArmy();
    };
    OrcArmyMaker.prototype.addOrcCommander = function () {
        this.orcCommander.addToOrcArmy();
    };
    OrcArmyMaker.prototype.addOrcBerserker = function () {
        this.orcBerserker.addToOrcArmy();
    };
    return OrcArmyMaker;
})();
var OrcBerserker = (function () {
    function OrcBerserker() {
    }
    OrcBerserker.prototype.addToOrcArmy = function () {
        console.log("An orc berserker is added to the orc army.");
    };
    return OrcBerserker;
})();
var Fighter = (function () {
    function Fighter() {
    }
    Fighter.prototype.spawnHero = function () {
        return "A hero joins your party.";
    };
    return Fighter;
})();
var Mage = (function () {
    function Mage() {
    }
    Mage.prototype.spawnHero = function () {
        return "A mage joins your party.";
    };
    return Mage;
})();
var HeroFactory = (function () {
    function HeroFactory() {
    }
    HeroFactory.prototype.getHero = function (heroType) {
        switch (heroType) {
            case "Fighter":
                return new Fighter();
                break;
            case "Mage":
                return new Mage();
                break;
            case "Thief":
                return new Thief();
                break;
            default:
                return null;
        }
    };
    return HeroFactory;
})();
var Thief = (function () {
    function Thief() {
    }
    Thief.prototype.spawnHero = function () {
        return "A thief joins your party.";
    };
    return Thief;
})();
//class Circle implements IShape {
//    private color: string;
//    private x: number;
//    private y: number;
//    private radius: number;
//    constructor(color: string) {
//        this.color = color;
//    }
//    setX(x: number) {
//        this.x = x;
//    }
//    setY(y: number) {
//        this.y = y;
//    }
//    setRadius(radius: number) {
//        this.radius = radius;
//    }
//    draw() {
//        console.log("Circle.draw()" + this.color + " " + this.x + " " + this.y + " " + this.radius);
//    }
//} 
//interface IShape {
//    draw();
//}    
var ShapeFactory = (function () {
    function ShapeFactory() {
        this.circleMap = {};
    }
    ShapeFactory.getCircle = function (color) {
        //let circle = this.circleMap;
        //if (circle == null) {
        //  circle = new Circle(color);
        //  this.circleMap.color = circle;
        //Add circle to circle map;
        console.log("Creating circle of color: " + color);
        //}
        //return circle;
    };
    return ShapeFactory;
})();
var Output = (function () {
    function Output() {
    }
    Output.outputMentalMessage = function (mindReader, messageContent) {
        console.log(" [" + mindReader.getName() + "] : " + messageContent);
    };
    return Output;
})();
var MindReader = (function () {
    function MindReader(name) {
        this.name = name;
    }
    MindReader.prototype.getName = function () {
        return this.name;
    };
    MindReader.prototype.setName = function (name) {
        this.name = name;
    };
    MindReader.prototype.sendMentalMessage = function (message) {
        Output.outputMentalMessage(this, message);
    };
    return MindReader;
})();
var Caretaker = (function () {
    function Caretaker() {
        this.spellList = [];
    }
    Caretaker.prototype.addSpell = function (spell) {
        this.spellList.push(spell);
    };
    Caretaker.prototype.retrieveSpell = function (index) {
        return this.spellList[index];
    };
    return Caretaker;
})();
var Memento = (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
})();
var Sorcerer = (function () {
    function Sorcerer() {
    }
    Sorcerer.prototype.getState = function () {
        return this.state;
    };
    Sorcerer.prototype.setState = function (newState) {
        this.state = newState;
    };
    Sorcerer.prototype.saveStateToMemento = function () {
        return new Memento(this.state);
    };
    Sorcerer.prototype.getStateFromMemento = function (memento) {
        this.state = memento.getState();
    };
    return Sorcerer;
})();
var DragonContext = (function () {
    function DragonContext() {
        this.state = null;
    }
    DragonContext.prototype.setState = function (state) {
        this.state = state;
    };
    DragonContext.prototype.getState = function () {
        return this.state;
    };
    return DragonContext;
})();
var DragonAttackState = (function () {
    function DragonAttackState() {
    }
    DragonAttackState.prototype.setState = function (context) {
        console.log("Dragon is in attack state");
        context.setState(this);
    };
    DragonAttackState.prototype.toString = function () {
        return "Dragon Attack.";
    };
    return DragonAttackState;
})();
var DragonDefendState = (function () {
    function DragonDefendState() {
    }
    DragonDefendState.prototype.setState = function (context) {
        console.log("Dragon is in defensive mode.");
        context.setState(this);
    };
    DragonDefendState.prototype.toString = function () {
        return "Dragon Defend.";
    };
    return DragonDefendState;
})();
var Wizard = (function () {
    function Wizard(name, strategy) {
        this.name = name;
        this.strategy = strategy;
    }
    Wizard.prototype.getName = function () {
        return this.name;
    };
    Wizard.prototype.castSpell = function () {
        console.log("*** " + this.name + " casts a spell.");
        return this.strategy.castSpell();
    };
    return Wizard;
})();
var FreezeSpell = (function () {
    function FreezeSpell() {
    }
    FreezeSpell.prototype.castSpell = function () {
        return "The freeze spell crystalizes all enemies in a thick shell of ice.";
    };
    return FreezeSpell;
})();
var FireSpell = (function () {
    function FireSpell() {
    }
    FireSpell.prototype.castSpell = function () {
        return "All enemies are engulfed in flames.";
    };
    return FireSpell;
})();
var LightningSpell = (function () {
    function LightningSpell() {
    }
    LightningSpell.prototype.castSpell = function () {
        return "Lightning strikes down from the sky and vaporizes all enemies.";
    };
    return LightningSpell;
})();
//# sourceMappingURL=app.js.map