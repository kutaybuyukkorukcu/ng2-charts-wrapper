import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Chart } from './chartModel';
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
export class SingleDataSetComponent implements OnInit {

  @Input()
  chart: Chart = new Chart();

  chartUtils = new ChartUtils();

  constructor() { }

  ngOnInit(): void {
  }
}
