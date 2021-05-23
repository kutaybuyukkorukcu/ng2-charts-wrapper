import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export class MultiDataSetChartComponent implements OnInit {

  @Input()
  chart: Chart = new Chart();

  chartUtils = new ChartUtils();

  constructor() { }

  ngOnInit(): void {
  }
}
