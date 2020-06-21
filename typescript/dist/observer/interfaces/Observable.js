"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observable {
    constructor() {
        this.observers = [];
        this.changed = false;
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(args) {
        if (this.changed === true) {
            this.observers.forEach(_observer => _observer.update(this, args));
            this.changed = false;
        }
    }
    setChanged() {
        this.changed = true;
    }
}
exports.default = Observable;
