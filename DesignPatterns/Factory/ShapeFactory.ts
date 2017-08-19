class ShapeFactory {


    getShape(shapeType: string) {

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
    }
}