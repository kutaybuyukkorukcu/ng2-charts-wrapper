import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartType, Chart } from './chartModel';
import { ChartUtils } from './chartUtils';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'lib-ng2-charts-wrapper',
  template: `
  `,
  styles: []
})
export class Ng2ChartsWrapperComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  // chartUtils = new ChartUtils(this.translate);
  // currentChartType!: ChartType;
  // timeInterval!: TimeInterval;

  // @Input()
  // chart: Chart = new Chart();
  
  // @Input() title!: string;

  // @Input() language: string = 'en';

  // @Input()
  // isSingleDataSetChartPresent!: boolean;
  
  // @Input()
  // isMultiDataSetChartPresent!: boolean;

  // constructor(private spinner: NgxSpinnerService, private httpClient: HttpClient,
  //   private translate: TranslateService) {
  //     translate.setDefaultLang(this.language);
  // }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  // public onChangeTimeInterval(timeInterval: TimeInterval) {
  //   this.timeInterval = timeInterval;
  // }

  // public onChangeChartType(chartType: ChartType) {
  //   this.currentChartType = chartType;
  //   this.chart.currentChartType = this.currentChartType;
  //   this.chart.currentChartTypeOptions = this.chartUtils.getCurrentChartTypeOptions(this.currentChartType);
  // }

  // public changeLangauge(language: string): void {
  //   this.translate.use(language);
  // }
}
