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
//# sourceMappingURL=ShapeFactory.js.map