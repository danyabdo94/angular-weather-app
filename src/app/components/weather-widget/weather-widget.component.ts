import { Component, OnInit, Input } from "@angular/core";
import { climateDayCondition, climateNightCondition } from "src/app/models/climate";

@Component({
  selector: "app-weather-widget",
  templateUrl: "./weather-widget.component.html",
  styleUrls: ["./weather-widget.component.css"]
})
export class WeatherWidgetComponent implements OnInit {
  climateDayConditions = climateDayCondition;
  climateNightConditions = climateNightCondition;

  @Input()
  weatherDesc: string = null;

  @Input()
  dayLight: boolean;

  @Input()
  humidity: number;

  @Input()
  pressure: number;

  @Input()
  temp_C: number;

  @Input()
  mintempC: number;

  @Input()
  maxtempC: number;

  ready = false;
  constructor() { }


  ngOnInit() {
    this.ready = true;
  }

}
