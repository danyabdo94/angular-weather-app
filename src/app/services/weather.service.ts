import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HelperService } from "./helper.service";
import { of } from "rxjs";
import { testData } from "./test-data";

@Injectable({
  providedIn: "root"
})
export class WeatherService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }

  getWeatherInCity(filterObject) {
    const queries = this.helperService.mapObjectToQueryParams(filterObject);
    return this.httpClient.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=2e9f306c80f949aa969150517182510&" + queries);
  }

  getCityFromIp(ip) {
    return this.httpClient.get("http://www.geoplugin.net/json.gp?ip=" + ip);
  }

  getIp() {
    return this.httpClient.get("https://api.ipify.org?format=json");
  }

  testDataForDev(object) {
    return of(testData);
  }

}
