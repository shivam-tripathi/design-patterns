"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const duck_1 = __importDefault(require("./duck"));
const flyWithWings_1 = __importDefault(require("../flyBehaviors/flyWithWings"));
const quack_1 = __importDefault(require("../quackBehaviors/quack"));
class MallardDuck extends duck_1.default {
    constructor() {
        super(new flyWithWings_1.default(), new quack_1.default());
    }
    display() {
        console.log('This is a mallard duck!');
    }
}
exports.default = MallardDuck;
