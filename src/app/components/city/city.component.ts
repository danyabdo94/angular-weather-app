import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { WeatherService } from "src/app/services/weather.service";
import { Climate, climateNightCondition, climateDayCondition, WeatherInterface } from "src/app/models/climate";
import { HelperService } from "src/app/services/helper.service";
import { NgxUiLoaderService } from "ngx-ui-loader";

@AutoUnsubscribe()
@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
  providers: [HelperService]
})
export class CityComponent implements OnInit, OnDestroy {
  climateDayConditions = climateDayCondition;
  climateNightConditions = climateNightCondition;
  weatherData: WeatherInterface[] = [];

  monthly = [
    {
      "id": "Min",
      "values": []
    },
    {
      "id": "Max",
      "values": []
    }
  ];
  filteredObject: {
    q: string,
    format: string
    extra: string
  } = {
      q: null,
      format: "json",
      extra: "localObsTime,isDayTime"
    };

  currentWeather: Climate = new Climate();

  constructor
    (
    private active: ActivatedRoute,
    private weatherService: WeatherService,
    private helperService: HelperService,
    private ngxService: NgxUiLoaderService
    ) {
      this.ngxService.start();
      this.active.queryParams.subscribe(data => {
      this.filteredObject.q = data.city + " Egypt";
      this.weatherService.getWeatherInCity(this.filteredObject).subscribe((asyncWeatherData: { data: any }) => {
        this.currentWeather = asyncWeatherData.data;
        console.log(this.currentWeather);
        this.ngxService.stop();
        this.helperService.mapToVisualize(this.weatherData, this.currentWeather);

        this.helperService.mapMinAdMaxToVisualize(this.monthly, this.currentWeather);

      });
    });
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
