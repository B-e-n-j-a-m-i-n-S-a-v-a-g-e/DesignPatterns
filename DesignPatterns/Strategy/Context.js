var Wizard = (function () {
    function Wizard(strategy) {
        this.strategy = strategy;
    }
    Wizard.prototype.castSpell = function () {
        return this.strategy.castSpell();
    };
    return Wizard;
})();
//# sourceMappingURL=Context.js.map