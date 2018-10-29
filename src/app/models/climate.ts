import { Url } from "url";

export const climateDayCondition = {
  "Sunny": "wi-day-sunny",
  "Partly cloudy": "wi-day-cloudy",
  "Cloudy": "wi-cloudy",
  "Overcast": "wi-day-sunny-overcast",
  "Mist": "wi-fog",
  "Patchy rain possible": "wi-day-rain",
  "Patchy snow possible": "wi-snow",
  "Patchy sleet possible": "wi-sleet",
  "Patchy freezing drizzle possible": "wi-snowflake-cold",
  "Thundery outbreaks possible": "wi-thunderstorm",
  "Blowing snow": "wi-snow-wind",
  "Blizzard": "wi-day-snow-thunderstorm",
  "Fog": "wi-day-fog",
  "Freezing fog": "wi-day-fog",
  "Patchy light drizzle": "wi-day-cloudy-windy",
  "Light drizzle": "wi-day-cloudy-windy",
  "Freezing drizzle": "wi-day-cloudy-windy",
  "Heavy freezing drizzle": "wi-day-cloudy-windy",
  "Patchy light rain": "wi-day-rain",
  "Light rain": "wi-day-rain",
  "Moderate rain at times": "wi-day-rain-mix",
  "Moderate rain": "wi-day-rain-mix",
  "Heavy rain at times": "wi-day-hail",
  "Heavy rain": "wi-day-hail",
  "Light freezing rain": "wi-day-sleet"
};
export const climateNightCondition = {
  "Clear": "wi-moon-alt-waning-crescent-6",
  "Partly cloudy": "wi-night-cloudy",
  "Cloudy": "wi-cloudy",
  "Overcast": "wi-night-sunny-overcast",
  "Mist": "wi-fog",
  "Patchy rain possible": "wi-night-rain",
  "Patchy snow possible": "wi-snow",
  "Patchy sleet possible": "wi-sleet",
  "Patchy freezing drizzle possible": "wi-snowflake-cold",
  "Thundery outbreaks possible": "wi-thunderstorm",
  "Blowing snow": "wi-snow-wind",
  "Blizzard": "wi-night-snow-thunderstorm",
  "Fog": "wi-night-fog",
  "Freezing fog": "wi-night-fog",
  "Patchy light drizzle": "wi-night-cloudy-windy",
  "Light drizzle": "wi-night-cloudy-windy",
  "Freezing drizzle": "wi-night-cloudy-windy",
  "Heavy freezing drizzle": "wi-night-cloudy-windy",
  "Patchy light rain": "wi-night-rain",
  "Light rain": "wi-night-rain",
  "Moderate rain at times": "wi-night-rain-mix",
  "Moderate rain": "wi-night-rain-mix",
  "Heavy rain at times": "wi-night-hail",
  "Heavy rain": "wi-night-hail",
  "Light freezing rain": "wi-night-sleet"
};

export class WeatherInterface {
  constructor(
    public time?: number,
    public value?: number
  ) { }
}



export class Climate {
  constructor(
    public current_condition?: {
      observation_time: string,
      temp_C: string,
      temp_F: string,
      weatherCode: string,
      localObsDateTime: string,
      isdaytime: string,
      weatherIconUrl: {
        value: string
      }[],
      weatherDesc: {
        value: string
      }[],
      windspeedMiles: string,
      windspeedKmph: string,
      winddirDegree: string,
      winddir16Point: string,
      precipMM: string,
      humidity: string,
      visibility: string,
      pressure: string,
      cloudcover: string,
      FeelsLikeC: string,
      FeelsLikeF: string
    }[],
    public weather?:
      {
        date: Date,
        astronomy: [
          {
            sunrise: string,
            sunset: string,
            moonrise: string,
            moonset: string,
            moon_phase: string,
            moon_illumination: string
          }
        ],
        maxtempC: string,
        maxtempF: string,
        mintempC: string,
        mintempF: string,
        totalSnow_cm: string,
        sunHour: string,
        uvIndex: string,
        hourly:
        {
          time: string,
          tempC: string,
          tempF: string,
          windspeedMiles: string,
          windspeedKmph: string,
          winddirDegree: string,
          winddir16Point: string,
          weatherCode: string,
          weatherIconUrl: {
            value: string
          }[],
          weatherDesc: {
            value: string
          }[],
          precipMM: string,
          humidity: string,
          visibility: string,
          pressure: string,
          cloudcover: string,
          HeatIndexC: string,
          HeatIndexF: string,
          DewPointC: string,
          DewPointF: string,
          WindChillC: string,
          WindChillF: string,
          WindGustMiles: string,
          WindGustKmph: string,
          FeelsLikeC: string,
          FeelsLikeF: string,
          chanceofrain: string,
          chanceofremdry: string,
          chanceofwindy: string,
          chanceofovercast: string,
          chanceofsunshine: string,
          chanceoffrost: string,
          chanceofhightemp: string,
          chanceoffog: string,
          chanceofsnow: string,
          chanceofthunder: string
        }[]
      }[],
    public ClimateAverages?:
      {
        month:
        {
          index: string,
          name: string,
          avgMinTemp: string,
          avgMinTemp_F: string,
          absMaxTemp: string,
          absMaxTemp_F: string,
          avgDailyRainfall: string,
        }[]
      }[]
  ) { }
}

