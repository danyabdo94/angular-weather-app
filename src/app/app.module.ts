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

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CityComponent,

  ],
  imports: [
    BrowserModule,
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
    MatCardModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
