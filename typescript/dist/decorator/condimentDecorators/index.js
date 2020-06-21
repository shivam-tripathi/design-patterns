"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mocha_1 = __importDefault(require("./Mocha"));
const Soy_1 = __importDefault(require("./Soy"));
const SteamedMilk_1 = __importDefault(require("./SteamedMilk"));
const Whip_1 = __importDefault(require("./Whip"));
exports.default = {
    Mocha: Mocha_1.default,
    Soy: Soy_1.default,
    SteamedMilk: SteamedMilk_1.default,
    Whip: Whip_1.default,
};
