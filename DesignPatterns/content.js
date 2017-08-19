window.onload = function () {
    //STRATEGY PATTERN IMPLEMENTATION
    console.log("<<<STRATEGY PATTERN IMPLEMENTATION>>>");
    var blueWizard = new Wizard("Blue Wizard", new FreezeSpell());
    console.log(blueWizard.castSpell());
    var redWizard = new Wizard("Red Wizard", new LightningSpell());
    console.log(redWizard.castSpell());
    var yellowWizard = new Wizard("Yellow Wizard", new FireSpell());
    console.log(yellowWizard.castSpell());
};
var Circle = (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        return "A circle is drawn";
    };
    return Circle;
})();
var Rectangle = (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        return "A rectangle is drawn";
    };
    return Rectangle;
})();
var ShapeFactory = (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.getShape = function (shapeType) {
        switch (shapeType) {
            case "Circle":
                return new Circle();
                break;
            case "Square":
                return new Square();
                break;
            case "Rectangle":
                return new Rectangle();
                break;
            default:
                return null;
        }
    };
    return ShapeFactory;
})();
var Square = (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        return "A square is drawn.";
    };
    return Square;
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
//# sourceMappingURL=content.js.map