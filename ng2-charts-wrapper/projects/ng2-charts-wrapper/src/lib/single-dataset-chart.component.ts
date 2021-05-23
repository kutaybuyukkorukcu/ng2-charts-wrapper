import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartComponent } from 'chart.js';
import { AnyObject } from 'chart.js/types/basic';
import { ChartModel } from './chartModel';
import Chart = ChartModel.Chart;
import { ChartUtils } from './chartUtils';

@Component({
  selector: 'single-dataset-chart',
  template: `
    <canvas *ngIf="chart.isChartLoaded == true"
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

  @Input()
  chart: Chart = new Chart();

  chartUtils = new ChartUtils();

  id!: string;
  defaults?: AnyObject | undefined;
  defaultRoutes?: { [property: string]: string; } | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
