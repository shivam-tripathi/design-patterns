"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DarkRoast_1 = __importDefault(require("./DarkRoast"));
const Decaf_1 = __importDefault(require("./Decaf"));
const Expresso_1 = __importDefault(require("./Expresso"));
const HouseBlend_1 = __importDefault(require("./HouseBlend"));
exports.default = {
    DarkRoast: DarkRoast_1.default,
    Decaf: Decaf_1.default,
    Expresso: Expresso_1.default,
    HouseBlend: HouseBlend_1.default,
};
