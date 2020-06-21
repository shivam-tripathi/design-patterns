"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaStore_1 = __importDefault(require("../PizzaStore"));
const NYCheesePizza_1 = __importDefault(require("../pizzas/NY/NYCheesePizza"));
class NYPizzaStore extends PizzaStore_1.default {
    createPizza(type) {
        let pizza = null;
        if (type === 'cheese') {
            pizza = new NYCheesePizza_1.default();
        }
        return pizza;
    }
}
exports.default = NYPizzaStore;
