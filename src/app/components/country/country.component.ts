import { Component, OnInit, OnDestroy } from "@angular/core";
import { countries } from "../../../assets/countries";
import { WeatherService } from "src/app/services/weather.service";
import { Climate, WeatherInterface } from "src/app/models/climate";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"]
})
export class CountryComponent implements OnInit, OnDestroy {

  countries = countries;
  citiesWeathers: { name: string, temp_C: string }[] = [];
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
    this.countries.forEach(country => {
      country.Egypt.forEach(city => {
        this.citiesWeathers.push({ name: city, temp_C: ((Math.random() * 25) + 5).toFixed(0) }); // between 5 to 30 "winter is coming"
      });
    });
    console.log(this.citiesWeathers);
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
            this.weatherData.push(new WeatherInterface(0, Number(this.currentWeather.current_condition[0].temp_C)));

            this.currentWeather.weather[0].hourly.forEach(hourWeather => {
              this.weatherData.push(new WeatherInterface((Number(hourWeather.time) / 100) + 3, Number(hourWeather.tempC)));
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
  ngOnDestroy(): void {
  }
}
