"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PizzaStore {
    constructor(pizzaFactory) {
        this.pizzaFactory = null;
        this.pizzaFactory = pizzaFactory;
    }
    orderPizz(type) {
        const pizza = this.pizzaFactory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
exports.default = PizzaStore;
