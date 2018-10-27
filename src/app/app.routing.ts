import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CityComponent } from "./components/city/city.component";
import { CountryComponent } from "./components/country/country.component";
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/app/country",
    pathMatch: "full"
  },
  {
    path: "app",
    children: [{
      path: "city",
      component: CityComponent,
    },
    {
      path: "country",
      component: CountryComponent,
    }]
  },
  {
    path: "**",
    redirectTo: "app/country"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
