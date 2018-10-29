import { Component, OnInit } from "@angular/core";
import { countries } from "../../../assets/countries";
import { WeatherService } from "src/app/services/weather.service";
import { Climate, WeatherInterface } from "src/app/models/climate";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {

  countries = countries;
  currentWeather: Climate = null;
  geopluginData: any = null;
  weatherData: WeatherInterface[] = [];
  filteredObject: {
    q: string,
    format: string
    extra: string
  } = {
      q: null,
      format: "json",
      extra: "localObsTime,isDayTime"
    };

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.filteredObject.q = position.coords.latitude + "," + position.coords.longitude;
          this.weatherService.getWeatherInCity(this.filteredObject).subscribe((weatherData: { data: any }) => {
            this.currentWeather = weatherData.data;
            console.log(this.currentWeather);
            this.currentWeather.weather[0].hourly.forEach(hourWeather => {
              this.weatherData.push(new WeatherInterface(Number(hourWeather.time) / 100, Number(hourWeather.tempC)));
            });
          });

          this.weatherService.getIp().subscribe((data: { ip: string }) => {
            this.weatherService.getCityFromIp(data.ip).subscribe(clientData => {
              this.geopluginData = clientData;
            });
          });

        },
        error => {
          switch (error.code) {
            case 1:
              alert("Please give the permission for the geolocation");
              break;
            case 2:
              console.log("Position Unavailable");
              break;
            case 3:
              console.log("Timeout");
              break;
          }
        });
    }
  }

}
