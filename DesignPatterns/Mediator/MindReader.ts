class MindReader {

    private name: string;

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    constructor(name: string) {
        this.name = name;
    }

    sendMentalMessage(message: string) {
        Output.outputMentalMessage(this, message);
    }
}