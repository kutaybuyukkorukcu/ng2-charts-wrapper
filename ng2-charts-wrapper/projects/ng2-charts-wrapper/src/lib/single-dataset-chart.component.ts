import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription, TimeInterval } from 'rxjs';
import { Chart } from './chartModel';
import { ChartUtils } from './chartUtils';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ChartType } from './chartModel';

@Component({
  selector: 'single-dataset-chart',
  template: `
    <div class="chart-wrapper">
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
    </div>
  `,
  styles: [
  ]
})
export class SingleDataSetComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  chartUtils = new ChartUtils(this.translate);

  @Input() chart: Chart = new Chart();

  @Input() language: string = 'en';

  constructor(private httpClient: HttpClient, private translate: TranslateService) {
    translate.setDefaultLang(this.language);
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
    this.translate.use(language);
  }
}
