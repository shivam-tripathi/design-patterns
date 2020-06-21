"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = require("../weatherData/subject");
class StatisticsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
        this.count = 0;
    }
    update(subject) {
        if (subject instanceof subject_1.WeatherData) {
            const weatherData = subject;
            if (this.count === 0) {
                const temperature = weatherData.getTemperature();
                const pressure = weatherData.getPressure();
                const humidity = weatherData.getHumidity();
                const statisticsDisplayData = { temperature, humidity, pressure };
                this.min = Object.assign({}, statisticsDisplayData);
                this.max = Object.assign({}, statisticsDisplayData);
                this.avg = Object.assign({}, statisticsDisplayData);
            }
            else {
                this.min.temperature = Math.min(this.min.temperature, weatherData.getTemperature());
                this.min.humidity = Math.min(this.min.humidity, weatherData.getHumidity());
                this.min.pressure = Math.min(this.min.pressure, weatherData.getHumidity());
                this.max.temperature = Math.max(this.max.temperature, weatherData.getTemperature());
                this.max.humidity = Math.max(this.max.humidity, weatherData.getHumidity());
                this.max.pressure = Math.max(this.max.pressure, weatherData.getHumidity());
                this.avg.temperature = parseFloat(((this.count * this.avg.temperature + weatherData.getTemperature()) / (this.count + 1)).toFixed(2));
                this.avg.humidity = parseFloat(((this.count * this.avg.humidity + weatherData.getHumidity()) / (this.count + 1)).toFixed(2));
                this.avg.pressure = parseFloat(((this.count * this.avg.pressure + weatherData.getHumidity()) / (this.count + 1)).toFixed(2));
            }
            this.count++;
            this.display();
        }
    }
    display() {
        console.log(`MIN | MAX | AVG humidity    ${this.min.humidity} | ${this.max.humidity} | ${this.avg.humidity}`);
        console.log(`MIN | MAX | AVG temperature ${this.min.temperature} | ${this.max.temperature} | ${this.avg.temperature}`);
        console.log(`MIN | MAX | AVG pressure    ${this.min.pressure} | ${this.max.pressure} | ${this.avg.pressure}`);
    }
}
exports.default = StatisticsDisplay;
