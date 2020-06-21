"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
class HouseBlend {
    constructor() {
        this.description = 'House Blend';
        this.size = constants_1.SIZES.TALL;
    }
    getDescription() {
        return `${this.description} ${this.getSize()}`;
    }
    cost() {
        return constants_1.PRICING.BEVERAGES.HOUSE_BLEND[this.getSize()];
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
}
exports.default = HouseBlend;
