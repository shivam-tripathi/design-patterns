"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SIZES;
(function (SIZES) {
    SIZES["TALL"] = "TALL";
    SIZES["GRANDE"] = "GRANDE";
    SIZES["LARGE"] = "LARGE";
})(SIZES = exports.SIZES || (exports.SIZES = {}));
exports.PRICING = {
    CONDIMENTS: {
        SOY: {
            [SIZES.TALL]: 0.15,
            [SIZES.GRANDE]: 0.2,
            [SIZES.LARGE]: 0.25,
        },
        MOCHA: {
            [SIZES.TALL]: 0.2,
            [SIZES.GRANDE]: 0.25,
            [SIZES.LARGE]: 0.3,
        },
        STEAMED_MILK: {
            [SIZES.TALL]: 0.1,
            [SIZES.GRANDE]: 0.15,
            [SIZES.LARGE]: 0.2,
        },
        WHIP: {
            [SIZES.TALL]: 0.1,
            [SIZES.GRANDE]: 0.15,
            [SIZES.LARGE]: 0.2,
        },
    },
    BEVERAGES: {
        DARK_ROAST: {
            [SIZES.TALL]: 0.99,
            [SIZES.GRANDE]: 1.49,
            [SIZES.LARGE]: 1.99,
        },
        DECAF: {
            [SIZES.TALL]: 1.05,
            [SIZES.GRANDE]: 1.55,
            [SIZES.LARGE]: 2.05,
        },
        EXPRESSO: {
            [SIZES.TALL]: 1.99,
            [SIZES.GRANDE]: 2.49,
            [SIZES.LARGE]: 2.99,
        },
        HOUSE_BLEND: {
            [SIZES.TALL]: 0.89,
            [SIZES.GRANDE]: 1.39,
            [SIZES.LARGE]: 1.89,
        },
    },
};
