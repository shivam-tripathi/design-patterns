"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheesePizza_1 = __importDefault(require("./pizzas/CheesePizza"));
class SimplePizzaFactory {
    createPizza(type) {
        let pizza = null;
        if (type === 'cheese') {
            pizza = new CheesePizza_1.default();
        }
        return pizza;
    }
}
exports.default = SimplePizzaFactory;
