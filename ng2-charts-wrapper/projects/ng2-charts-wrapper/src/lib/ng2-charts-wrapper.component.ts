import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartModel } from './utils';
import TimeInterval = ChartModel.TimeInterval;
import ChartType = ChartModel.ChartType;
import Chart = ChartModel.Chart;
import ChartUtils = ChartModel.ChartUtils;
import { NgxSpinnerModule } from "ngx-spinner";
import { ChartComponent } from 'chart.js';
import { SingleDataSetComponent } from './single-dataset-chart.component';
import { MultiDataSetChartComponent } from './multi-dataset-chart.component';

@Component({
  selector: 'lib-ng2-charts-wrapper',
  template: `
    <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div class="bg-gray-800 text-gray-500 rounded shadow-xl py-5 px-5 w-full lg:w-1/2">
          <div class="flex flex-wrap items-end">
              <div class="flex-1">
                  <h3 class="text-lg font-semibold leading-tight">Title</h3>
              </div>
              <div class="relative" (click)="">
                  <button class="text-xs hover:text-gray-300 h-6 focus:outline-none" (click)="">
                      <span x-text="chartData.options[chartData.selectedOption].label"></span><i class="ml-1 mdi mdi-chevron-down"></i>
                  </button>
                  <div class="bg-gray-700 shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-1 -mr-3" style="display: none;">
                      <span class="absolute top-0 right-0 w-3 h-3 bg-gray-700 transform rotate-45 -mt-1 mr-3"></span>
                      <div class="bg-gray-700 rounded w-full relative z-10 py-1">
                          <ul class="list-reset text-xs">
                              <single-dataset-chart *ngIf="" (onChangeChartType)="emitChartType($event)">
                              </single-dataset-chart>

                              <multi-dataset-chart *ngIf="" (onChangeChartType)="emitChartType($event)">
                              </multi-dataset-chart>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div class="chart-wrapper">
              
          </div>
      </div>
    </div>
  `,
  styles: [
    './styles.scss'
  ]
})
export class Ng2ChartsWrapperComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  chartUtils = new ChartUtils();
  chartQueryParams!: ChartQueryParams;
  currentChartType!: ChartType;
  @Input() title!: string;

  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onChangeTimeInterval(timeInterval: TimeInterval) {
    this.chartQueryParams.timeInterval = timeInterval;
    // mock request
  }

  /* public onChangeChartType(chartType: ChartType) {
    this.chartQueryParams.chartType = chartType;
    // mock request
  } */

  public onChangeChartType(chartType: ChartType) {
    this.currentChartType = chartType;
  }

  public emitChartType(chart: Chart) {
    chart.currentChartType = this.currentChartType;
    chart.currentChartTypeOptions = this.chartUtils.getCurrentChartTypeOptions(this.currentChartType);
  }
}

export interface ChartQueryParams {
  timeInterval: TimeInterval;
  chartType: ChartType
}