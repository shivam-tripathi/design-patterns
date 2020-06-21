"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mallardDuck_1 = __importDefault(require("./ducks/mallardDuck"));
const modelDuck_1 = __importDefault(require("./ducks/modelDuck"));
const rocketPowered_1 = __importDefault(require("./flyBehaviors/rocketPowered"));
function main() {
    let duck = new mallardDuck_1.default();
    duck.display();
    duck.performFly();
    duck.performQuack();
    duck = new modelDuck_1.default();
    duck.display();
    duck.performFly();
    duck.performQuack();
    duck.setFly(new rocketPowered_1.default());
    duck.performFly();
}
main();
