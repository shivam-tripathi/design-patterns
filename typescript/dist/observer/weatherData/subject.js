"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = __importDefault(require("../interfaces/Observable"));
class WeatherData extends Observable_1.default {
    dataChanged() {
        this.setChanged();
        this.notifyObservers();
    }
    setData(data) {
        this.data = data;
        this.dataChanged();
    }
    getTemperature() {
        return this.data.temperature;
    }
    getHumidity() {
        return this.data.humidity;
    }
    getPressure() {
        return this.data.pressure;
    }
}
exports.WeatherData = WeatherData;
