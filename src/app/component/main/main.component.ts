import { Component, OnInit } from '@angular/core';
import {IForecast, ITimeSeries} from '../Models/forecasts';
import {UserService} from '../../services/user.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  forecasts: IForecast = {approvedTime: null, referenceTime: null, geometry: null, timeSeries: []};
  stockholm: IForecast = {approvedTime: null, referenceTime: null, geometry: null, timeSeries: []};
  stocktom: ITimeSeries = {validTime: null, parameters: []};
  goteborg: IForecast = {approvedTime: null, referenceTime: null, geometry: null, timeSeries: []};
  gotetom: ITimeSeries = {validTime: null, parameters: []};
  malmo: IForecast = {approvedTime: null, referenceTime: null, geometry: null, timeSeries: []};
  maltom: ITimeSeries = {validTime: null, parameters: []};
  umea: IForecast = {approvedTime: null, referenceTime: null, geometry: null, timeSeries: []};
  umetom: ITimeSeries = {validTime: null, parameters: []};
  time: Date;


  constructor(private userService: UserService) {
  }

  sortResult(array: IForecast): IForecast {
    for (const temp of array.timeSeries){
      temp.parameters.sort((a, b) => a.name.localeCompare(b.name));
    }
    return array;
  }

  ngOnInit(): void {
    this.time = new Date();
    const tomorrow = new Date(this.time.setDate(this.time.getDate() + 1));
    tomorrow.setHours(13, 0, 0);
    const timestring = formatDate(tomorrow, 'yyyy-MM-ddTHH:mm:ss', 'en') + 'Z';


    this.userService.getStockholmForecast().subscribe((result: IForecast) => {
      this.stockholm = result;
      this.sortResult(this.stockholm);
      this.stocktom = this.stockholm.timeSeries.find(x => x.validTime.toString() === timestring);
    });
    this.userService.getGoteborgForecast().subscribe((result: IForecast) => {
      this.goteborg = result;
      this.sortResult(this.goteborg);
      this.gotetom = this.goteborg.timeSeries.find(x => x.validTime.toString() === timestring);
    });
    this.userService.getMalmoForecast().subscribe((result: IForecast) => {
      this.malmo = result;
      this.sortResult(this.malmo);
      this.maltom = this.malmo.timeSeries.find(x => x.validTime.toString() === timestring);
    });
    this.userService.getUmeaForecast().subscribe((result: IForecast) => {
      this.umea = result;
      this.sortResult(this.umea);
      this.umetom = this.umea.timeSeries.find(x => x.validTime.toString() === timestring);
    });
  }



}
