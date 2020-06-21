"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("../../Pizza"));
class NYCheesePizza extends Pizza_1.default {
    constructor() {
        super();
        this.name = 'NY style sauce and cheese pizza';
        this.dough = 'Thin crust dough';
        this.sauce = 'Marinara sauce';
        this.toppings.push('Grated Ragiano Cheese');
    }
}
exports.default = NYCheesePizza;
