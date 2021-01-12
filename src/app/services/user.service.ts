import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {IForecast, IParameters, ITimeSeries} from '../component/Models/forecasts';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private forecastUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json';
  private stockholmUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.063240/lat/59.334591/data.json';
  private goteborgUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.974560/lat/57.708870/data.json';
  private malmoUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.003822/lat/55.604981/data.json';
  private umeaUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/20.25972/lat/63.82842/data.json';


  constructor(private http: HttpClient) {
  }

  getStockholmForecast(): Observable<IForecast>{
    return this.http.get(this.stockholmUrl);
  }
  getGoteborgForecast(): Observable<IForecast>{
    return this.http.get(this.goteborgUrl);
  }
  getMalmoForecast(): Observable<IForecast>{
    return this.http.get(this.malmoUrl);
  }
  getUmeaForecast(): Observable<IForecast>{
    return this.http.get(this.umeaUrl);
  }

  getForecast(lon: string, lat: string): Observable<IForecast> {
    return this.http.get(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`);
  }

}
