import { Component, OnInit } from "@angular/core";
import { countries } from "../../../assets/countries";
import { WeatherService } from "src/app/services/weather.service";
import { Climate } from "src/app/models/climate";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit {

  countries = countries;
  currentWeather: Climate = null;

  filteredObject: {
    q: string,
    format: string
  } = {
      q: null,
      format: "json"
    };

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.filteredObject.q = position.coords.latitude + "," + position.coords.longitude;
          this.weatherService.getWeatherInCity(this.filteredObject).subscribe((weatherData) => {
            this.currentWeather = weatherData.data;
            console.log(weatherData);
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
        }
      );
    }
  }

}
