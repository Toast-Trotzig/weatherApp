import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() charttemp: number[];
  @Input() chartwind: number[];
  @Input() labels: string[];

  lineChartData: ChartDataSets[];

  lineChartLabels: string[];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'darkblue',
      backgroundColor: 'transparent',
    },
    {
      borderColor: 'black',
      backgroundColor: 'transparent'
    },
    {}
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() {
  }

  ngOnInit(): void {
  this.lineChartData = [
  {data: this.charttemp, label: 'Temperatur'},
  {data: this.chartwind, label: 'Vind m/s'}
];
  this.lineChartLabels = this.labels;
  }

}
