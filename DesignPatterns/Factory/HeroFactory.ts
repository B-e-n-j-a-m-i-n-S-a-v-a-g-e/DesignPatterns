class HeroFactory {


    getHero(heroType: string) {

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
    }
}