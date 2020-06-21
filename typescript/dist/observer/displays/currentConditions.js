"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = require("../weatherData/subject");
class CurrentConditionsDisplay {
    constructor(weatherDataSubject) {
        this.weatherDataSubject = weatherDataSubject;
        this.weatherDataSubject.registerObserver(this);
    }
    update(subject) {
        if (subject instanceof subject_1.WeatherData) {
            const weatherData = subject;
            this.temperature = weatherData.getTemperature();
            this.humidity = weatherData.getHumidity();
            this.pressure = weatherData.getPressure();
            this.display();
        }
    }
    display() {
        console.log(`Current conditions are: Humidity: ${this.humidity} Temperature: ${this.temperature} Pressure: ${this.pressure}`);
    }
}
exports.default = CurrentConditionsDisplay;
