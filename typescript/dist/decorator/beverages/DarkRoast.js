"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
class DarkRoast {
    constructor() {
        this.description = 'Dark Roast';
        this.size = constants_1.SIZES.TALL;
    }
    getDescription() {
        return `${this.description} ${this.getSize()}`;
    }
    cost() {
        return constants_1.PRICING.BEVERAGES.DARK_ROAST[this.getSize()];
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
}
exports.default = DarkRoast;
