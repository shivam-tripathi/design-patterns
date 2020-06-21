"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NYPizzaStore_1 = __importDefault(require("./abstract/pizzaStores/NYPizzaStore"));
const ChicagoPizzaStore_1 = __importDefault(require("./abstract/pizzaStores/ChicagoPizzaStore"));
function main() {
    let pizzaStore;
    let pizza;
    pizzaStore = new NYPizzaStore_1.default();
    pizza = pizzaStore.orderPizza('cheese');
    console.log(`Ethan ordered ${pizza.name}`);
    pizzaStore = new ChicagoPizzaStore_1.default();
    pizza = pizzaStore.orderPizza('cheese');
    console.log(`Joel ordered ${pizza.name}`);
}
main();
