class OrcArmyMaker {

    private orcArcher: IOrcFighter;
    private orcCommander: IOrcFighter;
    private orcBerserker: IOrcFighter;

    constructor() {
        this.orcArcher = new OrcArcher();
        this.orcCommander = new OrcCommander();
        this.orcBerserker = new OrcBerserker();
    }

    addOrcArcher() {
        this.orcArcher.addToOrcArmy();
    }
    addOrcCommander() {
        this.orcCommander.addToOrcArmy();
    }
    addOrcBerserker() {
        this.orcBerserker.addToOrcArmy();
    }
}