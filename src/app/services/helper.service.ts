import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor() { }

  mapObjectToQueryParams(data) {
    let urlTemp = "";
    for (const anAttribute in data) {
      if (anAttribute) {
        const value = data[anAttribute];
        if (value) {
          urlTemp += anAttribute;
          urlTemp += "=";
          urlTemp += value;
          urlTemp += "&";
        }
      }
    }
    if (urlTemp.length > 1) {
      urlTemp = urlTemp.substring(0, urlTemp.length - 1);
    }
    return urlTemp;
  }




}
