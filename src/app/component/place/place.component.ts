import {Component, OnInit, ViewChild} from '@angular/core';
import {IForecast, ITimeSeries} from '../Models/forecasts';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserService} from '../../services/user.service';
import {formatDate} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  forecast: ITimeSeries[] = [];
  tempArray: number[] = [];
  windArray: number[] = [];
  labelArray: string[] = [];
  town: string;
  minDate: Date;
  maxDate: Date;

  displayedColumns: string[] = ['day', 'weather', 'wind', 'rain', 'humidity'];
  dataSource: MatTableDataSource<ITimeSeries> = new MatTableDataSource<ITimeSeries>(this.forecast);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate() + 9);
  }

  ngOnInit(): void {
    const lon = this.route.snapshot.paramMap.get('long');
    const lat = this.route.snapshot.paramMap.get('lat');
    if (lon === '18.009259' && lat === '58.990745') {
      this.town = 'Stockholm';
    }
    if (lon === '11.982345' && lat === '57.989506') {
      this.town = 'Göteborg';
    }
    if (lon === '12.992263' && lat === '56.008929') {
      this.town = 'Malmö';
    }
    if (lon === '20.009725' && lat === '63.992678') {
      this.town = 'Umeå';
    }

    this.userService.getForecast(lon, lat).subscribe((result: IForecast) => {
      this.forecast = result.timeSeries;
      for (const temp of this.forecast) {
        temp.parameters.sort((a, b) => a.name.localeCompare(b.name));
      }
      this.dataSource.data = this.forecast;

      for (const temp of this.forecast) {
        this.tempArray.push(temp.parameters[12].values[0]);
      }
      for (const temp of this.forecast) {
        this.windArray.push(temp.parameters[17].values[0]);
      }
      for (const temp of this.forecast) {
        this.labelArray.push(formatDate(temp.validTime, 'EEE M/d, H:mm', 'en-US'));
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyDateFilter(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const filterValue = formatDate(inputValue, 'yyyy-MM-dd', 'en');
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
