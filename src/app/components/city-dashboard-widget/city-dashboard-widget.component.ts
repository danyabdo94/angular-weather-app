import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-city-dashboard-widget",
  templateUrl: "./city-dashboard-widget.component.html",
  styleUrls: ["./city-dashboard-widget.component.css"]
})
export class CityDashboardWidgetComponent implements OnInit {

  @Input()
  temp_C: string;

  @Input()
  name: string;

  @Input()
  condition: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(cityName) {
    this.router.navigate(["/app/city"], {
      queryParams: { city: cityName }
    });
  }
}
