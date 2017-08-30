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