import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"]
})
export class CityComponent implements OnInit, OnDestroy {
  city: string;

  constructor(private active: ActivatedRoute) {
    this.active.queryParams.subscribe(data => {
      this.city = data.city;
      console.log(this.city);
    });
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
