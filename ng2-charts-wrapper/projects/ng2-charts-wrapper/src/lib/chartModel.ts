import { SingleDataSet, Label, SingleOrMultiDataSet, Color } from 'ng2-charts';
import { getChartTypePie, getChartTypePieOptions, getSingleDataSetChartColors } from './chartUtils';

export enum TimeInterval {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
    CUSTOM = 'CUSTOM'
  }

export enum ChartType {
    PIE = 'pie',
    DOUGHNUT = 'doughnut',
    BAR = 'bar',
    LINE = 'line',
    RADAR = 'radar',
    POLAR = 'polararea',
    BUBBLE = 'bubble',
    SCATTER = 'scatter',
    DYNAMIC = 'dynamic'
}
export class Chart {
    isChartLoaded: boolean;
    currentChartType: any;
    currentChartTypeOptions: any;
    currentTimeInterval: TimeInterval;
    chartColors: Color[];
    chartLabels: Label[];

    chartData: SingleOrMultiDataSet;
    chartDataSet: SingleOrMultiDataSetWithLabel[];

    constructor(
        currentChartType?: ChartType,
        currentChartTypeOptions?: any,
        currentTimeInterval?: TimeInterval,
        chartColors?: Color[],
        chartLabels?: Label[]
    ) {
        this.isChartLoaded = false;
        this.currentChartType = currentChartType || getChartTypePie();
        this.currentChartTypeOptions = currentChartTypeOptions || getChartTypePieOptions();
        this.currentTimeInterval = currentTimeInterval || TimeInterval.DAILY;
        this.chartColors = chartColors || getSingleDataSetChartColors();
        this.chartLabels = chartLabels || [];
        this.chartData = [];
        this.chartDataSet = [];
    }
}

export class SingleOrMultiDataSetWithLabel {
    data: SingleDataSet
    label: string

    constructor(data?: SingleDataSet, label?: string) {
        this.data = data || [];
        this.label = label || '';
    }
}