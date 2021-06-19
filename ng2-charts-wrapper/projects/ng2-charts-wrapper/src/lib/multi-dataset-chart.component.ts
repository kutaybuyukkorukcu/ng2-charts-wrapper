import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chart } from './chartModel';
import { ChartUtils } from './chartUtils';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ChartType } from './chartModel';
@Component({
  selector: 'multi-dataset-chart',
  template: `
    <div class="chart-wrapper">
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
    </div>
  `,
  styles: [
  ]
})
export class MultiDataSetChartComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  @Input() chart!: Chart;

  @Input() chartUtils!: ChartUtils;
  
  @Input() language: string = 'en';

  @Input() translateService!: TranslateService;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChangeChartType(chartType: ChartType): void {
    this.chart.currentChartType = chartType;
    this.chart.currentChartTypeOptions = this.chartUtils.getCurrentChartTypeOptions(chartType);
  }

  onChangeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
