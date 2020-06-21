"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    constructor(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    performFly() {
        this.flyBehavior.fly();
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    setFly(fb) {
        this.flyBehavior = fb;
    }
    setQuack(qb) {
        this.quackBehavior = qb;
    }
}
exports.default = Duck;
