export namespace ChartRequest {
    // Model for Pie, Doughnut and Bar Charts
    export class SingleDataSetChartResponse {
        totalDataCount: number;
        singleDataSet: SingleDataSetChartItem[];

        constructor(totalDataCount?: number, singleDataSet?: SingleDataSetChartItem[]) {
            this.totalDataCount = totalDataCount || 0;
            this.singleDataSet = singleDataSet || [];
        }
    }

    // Fields needed for Pie, Doughnut and Bar Charts
    export class SingleDataSetChartItem {
        data: number | any;
        label!: string;

        constructor() {}
    }

    // Model for MultiDataSet Charts
    export class MultiDataSetChartResponse {
        totalDataCount: number;
        multiDataSet: MultiDataSetChartItem[];
        label: string;

        constructor(totalDataCount?: number, multiDataSet?: MultiDataSetChartItem[], label?: string) {
            this.totalDataCount = totalDataCount || 0;
            this.multiDataSet = multiDataSet || [];
            this.label = label || '';
        }
    }

    // Fields needed for Line Charts
    // Time Interval can be hour of a day, day of a week or month, month of a year
    // For daily request => 8 -> 8 AM, 15 -> 3 PM
    // For weekly and monthly request => 3 -> third day of the month, 4 -> fourth day of the month
    // For quarter rquests => 4 -> fourth month of the year (April)
    export class MultiDataSetChartItem {
        data: number | any;
        timeInterval!: number;
    }
}