class Caretaker {

    spellList: Memento[] = [];

    addSpell(spell: Memento) {
        this.spellList.push(spell);
    }

    retrieveSpell(index: number) {
        return this.spellList[index];
    }

}