"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const duck_1 = __importDefault(require("./duck"));
const flyNoWay_1 = __importDefault(require("../flyBehaviors/flyNoWay"));
const squeak_1 = __importDefault(require("../quackBehaviors/squeak"));
class ModelDuck extends duck_1.default {
    constructor() {
        super(new flyNoWay_1.default(), new squeak_1.default());
    }
    display() {
        console.log('This is a model duck!');
    }
}
exports.default = ModelDuck;
