"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor() {
        this.toppings = [];
    }
    prepare() {
        console.log(`Preparing ${this.name}.`);
        console.log(`Tossing dough ${this.dough}.`);
        console.log(`Adding sauce ${this.sauce}.`);
        console.log('Adding toppings:');
        this.toppings.forEach(topping => {
            console.log(`\t${topping}`);
        });
    }
    bake() {
        console.log('Bake for 25 minutes at 350 degrees');
    }
    cut() {
        console.log('Cut pizza into diagnol slices');
    }
    box() {
        console.log('Place pizza in official pizza box');
    }
}
exports.default = Pizza;
