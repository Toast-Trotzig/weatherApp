import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IForecast, ITimeSeries, IWeatherCardData} from '../Models/forecasts';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})


export class WeathercardComponent implements OnInit {

  @Input() forecasts: ITimeSeries[];



  data: IWeatherCardData[] = [];
  tmp: IWeatherCardData = {minTemp: null, maxTemp: null, date: null, precip: null, weathericon: null, winddirection: null, windspeed: null};
  tempforecast: ITimeSeries[] = [];


  constructor() {

  }

  sortParams(array: ITimeSeries[], param: number): ITimeSeries[] {
    array.sort(((a, b) => b.parameters[param].values[0] - a.parameters[param].values[0]));
    return array;
  }

  ngOnInit(): void {

    const time = new Date();
    let mintime = new Date();
    const maxtime = new Date();
    let mintimestring;
    maxtime.setDate(time.getDate() + 10);

    while (mintime <= maxtime) {
      const temp = Object.assign({}, this.tmp);
      mintimestring = formatDate(mintime, 'yyyy-MM-dd', 'en');
      this.tempforecast = this.forecasts.filter(x => x.validTime.toString().includes(mintimestring));
      this.sortParams(this.tempforecast, 12);
      temp.maxTemp = this.tempforecast[0].parameters[12].values[0];
      temp.weathericon = this.tempforecast[0].parameters[18].values[0];
      temp.date = this.tempforecast[0].validTime;
      const array = this.tempforecast.reverse();
      temp.minTemp = array[0].parameters[12].values[0];
      this.sortParams(array, 17);
      temp.windspeed = array[0].parameters[17].values[0];
      temp.winddirection = array[0].parameters[16].values[0];
      this.sortParams(array, 8);
      temp.precip = array[0].parameters[8].values[0];
      this.data.push(temp);
      mintime = new Date(mintime.setDate(mintime.getDate() + 1));
    }
  }

}
