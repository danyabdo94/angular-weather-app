import { Component, OnInit, OnDestroy } from "@angular/core";
import { countries } from "../../../assets/countries";
import { WeatherService } from "src/app/services/weather.service";
import { Climate, WeatherInterface, climateDayCondition, climateNightCondition } from "src/app/models/climate";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { HelperService } from "src/app/services/helper.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@AutoUnsubscribe()
@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
  providers: [HelperService]
})
export class CountryComponent implements OnInit, OnDestroy {
  climateDayConditions = climateDayCondition;
  climateNightConditions = climateNightCondition;
  climateCondition = null;
  countries = countries;
  citiesWeathers: { name: string, temp_C: string, condition: string }[] = [];
  currentWeather: Climate = null;
  geopluginData: any = null;
  weatherData: WeatherInterface[] = [];
  filteredObject: {
    q: string,
    format: string
    extra: string
  } = {
      q: "Cairo Egypt",
      format: "json",
      extra: "localObsTime,isDayTime"
    };

  constructor(
    private weatherService: WeatherService,
    private helperService: HelperService,
    private ngxService: NgxUiLoaderService
  ) {
    this.ngxService.start();
    // tslint:disable-next-line:max-line-length
    this.helperService.getWeatherOfCities(this.countries, this.climateCondition, this.citiesWeathers, this.climateDayConditions, this.climateNightConditions);
  }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.filteredObject.q = position.coords.latitude + "," + position.coords.longitude;
          this.getasyncData();

        },
        error => {
          this.getasyncData();
          switch (error.code) {
            case 1:
              alert("Please give the permission for the geolocation");
              break;
            case 2:
              alert("Please check the connection");
              break;
            case 3:
              alert("Please check the connection");
              break;
          }
        });
    }
  }

  ngOnDestroy(): void {
  }

  getasyncData() {
    this.weatherService.getWeatherInCity(this.filteredObject).subscribe((weatherData: { data: any }) => {
      this.currentWeather = weatherData.data;
      this.helperService.mapToVisualize(this.weatherData, this.currentWeather);
    });

    this.weatherService.getIp().subscribe((data: { ip: string }) => {
      this.weatherService.getCityFromIp(data.ip).subscribe(clientData => {
        this.ngxService.stop();
        this.geopluginData = clientData;
      });
    });

  }
}
