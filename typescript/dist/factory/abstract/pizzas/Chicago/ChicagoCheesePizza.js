"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = __importDefault(require("../../Pizza"));
class ChicagoCheesePizza extends Pizza_1.default {
    constructor() {
        super();
        this.name = 'Chicago style deep dish cheese pizza';
        this.dough = 'Extra thick crust dough';
        this.sauce = 'Plum tomato sauce';
        this.toppings.push('Shredded mozarella cheese');
    }
    cut() {
        console.log('Cutting pizza into square slices');
    }
}
exports.default = ChicagoCheesePizza;
