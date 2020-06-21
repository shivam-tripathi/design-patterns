"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beverages_1 = __importDefault(require("./beverages"));
const condimentDecorators_1 = __importDefault(require("./condimentDecorators"));
const constants_1 = require("./constants");
function main() {
    let beverage = new beverages_1.default.DarkRoast();
    beverage = new condimentDecorators_1.default.Mocha(beverage);
    beverage = new condimentDecorators_1.default.Mocha(beverage);
    beverage = new condimentDecorators_1.default.Whip(beverage);
    beverage.setSize(constants_1.SIZES.LARGE);
    console.log(`${beverage.getDescription()}: ${beverage.cost()}`);
    const beverage2 = new beverages_1.default.Expresso();
    console.log(`${beverage2.getDescription()}: ${beverage2.cost()}`);
    let beverage3 = new beverages_1.default.HouseBlend();
    beverage3 = new condimentDecorators_1.default.Soy(beverage3);
    beverage3 = new condimentDecorators_1.default.Mocha(beverage3);
    beverage3 = new condimentDecorators_1.default.Whip(beverage3);
    beverage3.setSize(constants_1.SIZES.LARGE);
    console.log(`${beverage3.getDescription()}: ${beverage3.cost()}`);
}
main();
