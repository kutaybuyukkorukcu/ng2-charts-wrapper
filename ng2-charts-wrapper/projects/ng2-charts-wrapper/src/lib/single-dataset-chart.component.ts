import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartComponent } from 'chart.js';
import { AnyObject } from 'chart.js/types/basic';
import { ChartModel } from './utils';
import Chart = ChartModel.Chart;
import ChartUtils = ChartModel.ChartUtils;
import ChartType = ChartModel.ChartType;

@Component({
  selector: 'single-dataset-chart',
  template: `
    <canvas 
      baseChart
      class="chart"
      [data]="chart.chartData"
      [labels]="chart.chartLabels"
      [chartType]="chart.currentChartType"
      [options]="chart.currentChartTypeOptions"
      [colors]="chart.chartColors"
    >
    </canvas>
  `,
  styles: [
  ]
})
export class SingleDataSetComponent implements OnInit, ChartComponent {

  chart: Chart = new Chart();

  chartUtils = new ChartUtils();

  @Output() 
  onChangeChartType: EventEmitter<Chart> = new EventEmitter();

  id!: string;
  defaults?: AnyObject | undefined;
  defaultRoutes?: { [property: string]: string; } | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeChart(chart: Chart) {
    this.onChangeChartType.emit(chart);
  }
}
