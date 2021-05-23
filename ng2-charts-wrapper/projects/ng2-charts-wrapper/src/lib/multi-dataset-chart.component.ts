import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartComponent } from 'chart.js';
import { AnyObject } from 'chart.js/types/basic';
import { ChartModel } from './chartModel';
import Chart = ChartModel.Chart;
import { ChartUtils } from './chartUtils';

@Component({
  selector: 'multi-dataset-chart',
  template: `
    <canvas 
      baseChart
      class="chart"
      [datasets]="chart.chartDataSet"
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
export class MultiDataSetChartComponent implements OnInit, ChartComponent {

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
