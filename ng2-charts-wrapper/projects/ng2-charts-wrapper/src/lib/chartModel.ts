import { SingleDataSet, Label, SingleOrMultiDataSet, Color } from 'ng2-charts';
import { getChartTypePie, getChartTypePieOptions, getSingleDataSetChartColors } from './chartUtils';

export enum TimeInterval {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    MONTHLY = 'MONTHLY',
    QUARTER_1 = 'QUARTER_1',
    QUARTER_2 = 'QUARTER_2',
    QUARTER_3 = 'QUARTER_3',
    QUARTER_4 = 'QUARTER_4'
}

export enum ChartType {
    PIE = 'PIE',
    DOUGHNUT = 'DOUGHNUT',
    BAR = 'BAR',
    LINE = 'LINE',
    RADAR = 'RADAR',
    POLAR = 'POLARAREA',
    BUBBLE = 'BUBBLE',
    SCATTER = 'SCATTER',
    DYNAMIC = 'DYNAMIC'
}
export class Chart {
    isChartLoaded: boolean;
    currentChartType: any;
    currentChartTypeOptions: any;
    chartColors: Color[];
    chartLabels: Label[];

    chartData: SingleOrMultiDataSet;
    chartDataSet: SingleOrMultiDataSetWithLabel[];

    constructor(
        currentChartType?: ChartType,
        currentChartTypeOptions?: any,
        chartColors?: Color[],
        chartLabels?: Label[]
    ) {
        this.isChartLoaded = false;
        this.currentChartType = currentChartType || getChartTypePie();
        this.currentChartTypeOptions = currentChartTypeOptions || getChartTypePieOptions();
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