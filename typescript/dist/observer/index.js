"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = require("./weatherData/subject");
const currentConditions_1 = __importDefault(require("./displays/currentConditions"));
const heatIndex_1 = __importDefault(require("./displays/heatIndex"));
const statistics_1 = __importDefault(require("./displays/statistics"));
class WeatherStation {
    run() {
        const weatherDataSubject = new subject_1.WeatherData();
        new currentConditions_1.default(weatherDataSubject);
        new heatIndex_1.default(weatherDataSubject);
        new statistics_1.default(weatherDataSubject);
        weatherDataSubject.setData({ temperature: 12, humidity: 15, pressure: 13.11 });
        console.log('\n');
        weatherDataSubject.setData({ temperature: 13, humidity: 16, pressure: 13.22 });
        console.log('\n');
        weatherDataSubject.setData({ temperature: 14, humidity: 17, pressure: 13.33 });
    }
}
function main() {
    const weatherStation = new WeatherStation();
    weatherStation.run();
}
main();
