"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
class Soy {
    constructor(beverage) {
        this.beverage = beverage;
        this.description = 'Soy';
        this.size = this.beverage.getSize();
    }
    getDescription() {
        return `${this.beverage.getDescription()}, ${this.description}`;
    }
    cost() {
        return parseFloat((this.beverage.cost() + constants_1.PRICING.CONDIMENTS.SOY[this.getSize()]).toFixed(2));
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.beverage.setSize(size);
        this.size = size;
    }
}
exports.default = Soy;
