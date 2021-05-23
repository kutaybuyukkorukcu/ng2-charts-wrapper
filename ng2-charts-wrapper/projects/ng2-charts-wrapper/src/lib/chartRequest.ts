export namespace ChartRequest {
    // Model for Pie, Doughnut and Bar Charts
    export class SingleDataSetChartResponse {
        totalDataCount: number;
        items: SingleDataSetChartItem[];

        constructor(totalDataCount?: number, items?: SingleDataSetChartItem[]) {
            this.totalDataCount = totalDataCount || 0;
            this.items = items || [];
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
    export class MultiDataSetChartItem {
        data: number | any;
        timeInterval!: number;
    }
}