"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = require("../weatherData/subject");
class HeatIndexDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    update(subject) {
        if (subject instanceof subject_1.WeatherData) {
            const weatherData = subject;
            this.temperature = weatherData.getTemperature();
            this.humidity = weatherData.getHumidity();
            this.display();
        }
    }
    display() {
        const T = this.temperature, RH = this.humidity;
        const heatindex = 16.923 +
            1.85212 * 10 -
            1 * T +
            5.37941 * RH -
            1.00254 * 10 -
            1 * T * RH +
            9.41695 * 10 -
            3 * Math.pow(T, 2) +
            7.28898 * 10 -
            3 * Math.pow(RH, 2) +
            3.45372 * 10 -
            4 * Math.pow(T, 2) * RH -
            8.14971 * 10 -
            4 * T * Math.pow(RH, 2) +
            1.02102 * 10 -
            5 * Math.pow(T, 2) * Math.pow(RH, 2) -
            3.8646 * 10 -
            5 * Math.pow(T, 3) +
            2.91583 * 10 -
            5 * Math.pow(RH, 3) +
            1.42721 * 10 -
            6 * Math.pow(T, 3) * RH +
            1.97483 * 10 -
            7 * T * Math.pow(RH, 3) -
            2.18429 * 10 -
            8 * Math.pow(T, 3) * Math.pow(RH, 2) +
            8.43296 * 10 -
            10 * Math.pow(T, 2) * Math.pow(RH, 3) -
            4.81975 * 10 -
            11 * Math.pow(T, 3) * Math.pow(RH, 3);
        console.log(`Heat index is ${parseFloat(heatindex.toFixed(2))}`);
    }
}
exports.default = HeatIndexDisplay;
