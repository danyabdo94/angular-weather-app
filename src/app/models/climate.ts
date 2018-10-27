import { Url } from "url";

export const climateCondition = {
  "Sunny": 113,
  "Clear": 113,
  "Partly cloudy": 116,
  "Cloudy": 119,
  "Overcast": 122,
  "Mist": 143,
  "Patchy rain possible": 176,
  "Patchy snow possible": 179,
  "Patchy sleet possible": 182,
  "Patchy freezing drizzle possible": 185,
  "Thundery outbreaks possible": 200,
  "Blowing snow": 227,
  "Blizzard": 230,
  "Fog": 248,
  "Freezing fog": 260,
  "Patchy light drizzle": 263,
  "Light drizzle": 266,
  "Freezing drizzle": 281,
  "Heavy freezing drizzle": 284,
  "Patchy light rain": 293,
  "Light rain": 296,
  "Moderate rain at times": 299,
  "Moderate rain": 302,
  "Heavy rain at times": 305,
  "Heavy rain": 308,
  "Light freezing rain": 311
};


export class Climate {
  constructor(
    public current_condition?: {
      observation_time: string,
      temp_C: string,
      temp_F: string,
      weatherCode: string,
      weatherIconUrl: [
        {
          value: string
        }
      ],
      weatherDesc: [
        {
          value: string
        }
      ],
      windspeedMiles: number,
      windspeedKmph: number,
      winddirDegree: number,
      winddir16Point: string,
      precipMM: number,
      humidity: number,
      visibility: number,
      pressure: number,
      cloudcover: number,
      FeelsLikeC: number,
      FeelsLikeF: number
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
        maxtempC: number,
        maxtempF: number,
        mintempC: number,
        mintempF: number,
        totalSnow_cm: number,
        sunHour: number,
        uvIndex: number,
        hourly:
        {
          time: number,
          tempC: number,
          tempF: number,
          windspeedMiles: number,
          windspeedKmph: number,
          winddirDegree: number,
          winddir16Point: string,
          weatherCode: number,
          weatherIconUrl: [
            {
              value: string
            }
          ],
          weatherDesc: [
            {
              value: string
            }
          ],
          precipMM: number,
          humidity: number,
          visibility: number,
          pressure: number,
          cloudcover: number,
          HeatIndexC: number,
          HeatIndexF: number,
          DewPointC: number,
          DewPointF: number,
          WindChillC: number,
          WindChillF: number,
          WindGustMiles: number,
          WindGustKmph: number,
          FeelsLikeC: number,
          FeelsLikeF: number,
          chanceofrain: number,
          chanceofremdry: number,
          chanceofwindy: number,
          chanceofovercast: number,
          chanceofsunshine: number,
          chanceoffrost: number,
          chanceofhightemp: number,
          chanceoffog: number,
          chanceofsnow: number,
          chanceofthunder: number
        }[]
      },
    public ClimateAverages?:
      {
        month:
        {
          index: number,
          name: string,
          avgMinTemp: number,
          avgMinTemp_F: number,
          absMaxTemp: number,
          absMaxTemp_F: number,
          avgDailyRainfall: number,
        }[]
      }[]
  ) { }
}

