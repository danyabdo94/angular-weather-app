import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "./app.routing";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { CountryComponent } from "./components/country/country.component";
import { CityComponent } from "./components/city/city.component";
import { HelperService } from "./services/helper.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { WeatherWidgetComponent } from "./components/weather-widget/weather-widget.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VisualizeD3WeatherComponent } from "./components/visualize-d3-weather/visualize-d3-weather.component";
import { CityDashboardWidgetComponent } from "./components/city-dashboard-widget/city-dashboard-widget.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CityComponent,
    WeatherWidgetComponent,
    VisualizeD3WeatherComponent,
    CityDashboardWidgetComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.cubeGrid,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff"
    }),
    FlexLayoutModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
