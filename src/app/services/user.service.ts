import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IForecast} from '../component/Models/forecasts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private stockholmUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18/lat/59/data.json';
  private goteborgUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12/lat/58/data.json';
  private malmoUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13/lat/56/data.json';
  private umeaUrl = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/20/lat/64/data.json';


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
