import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WeatherInterface, Climate } from "../models/climate";

@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor() { }

  mapObjectToQueryParams(data) {
    let urlTemp = "";
    for (const anAttribute in data) {
      if (anAttribute) {
        const value = data[anAttribute];
        if (value) {
          urlTemp += anAttribute;
          urlTemp += "=";
          urlTemp += value;
          urlTemp += "&";
        }
      }
    }
    if (urlTemp.length > 1) {
      urlTemp = urlTemp.substring(0, urlTemp.length - 1);
    }
    return urlTemp;
  }


  mapToVisualize(weatherData, currentWeather) {
    weatherData.push(new WeatherInterface(0, Number(currentWeather.current_condition[0].temp_C)));
    currentWeather.weather[0].hourly.forEach(hourWeather => {
      weatherData.push(new WeatherInterface((Number(hourWeather.time) / 100) + 3, Number(hourWeather.tempC)));
    });
  }

  mapMinAdMaxToVisualize(monthly, weatherData: Climate) {
    weatherData.ClimateAverages[0].month.forEach((month, index) => {
      const date = new Date((index + 1) + "-1-" + new Date().getFullYear());
      monthly[0].values.push({ date: date, temperature: month.avgMinTemp });
      monthly[1].values.push({ date: date, temperature: month.absMaxTemp });
    });
  }



}

