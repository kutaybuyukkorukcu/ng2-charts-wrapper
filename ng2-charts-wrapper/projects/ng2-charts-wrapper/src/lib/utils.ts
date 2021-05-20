import { SingleDataSet, Label, SingleOrMultiDataSet, Color } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import {TranslateService} from '@ngx-translate/core';

export namespace ChartModel {
    
    export class ChartUtils {

        translate: TranslateService | any;

        constructor(translate?: TranslateService) {
            this.translate = translate;
        }
        
        public getChartTypePieOptions() {
            return {
                legend: {
                    position: 'left',
                    display: true,
                    align: 'end'
                },
                responsive: true,
                maintainAspectRatio: false,
                cutoutPercentage: 0,
                plugins: {
                        labels: {
                            render: 'percentage',
                            fontColor: '#000',
                            position: 'border'
                    }
                }
            }
        }

        public getChartTypeDoughnutOptions() {
            return {
                legend: {
                    position: 'left',
                    display: true,
                    align: 'end'
                },
                maintainAspectRatio: false,
                cutoutPercentage: 50,
                responsive: true,
                plugins: {
                    labels: {
                        render: 'percentage',
                        fontColor: '#000',
                        position: 'border'
                    }
                }
            }
        }

        public getChartTypeBarOptions() {
            return {
                responsive: true,
                legend: {
                    display: false,
                },
                maintainAspectRatio: false,
                plugins: {
                    labels: {
                        render: 'value',
                        fontColor: '#000',
                        textMargin: -15
                    }
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                precision: 0
                            }
                        }
                    ]
                }
            }
        }
    
        public getChartTypeLineOptions(translate?: TranslateService) {
            return {
                responsive: true,
                legend: {
                    position: 'top',
                    display: true
                },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: true,
                        offset: true,
                        scaleLabel: {
                            display: true,
                            labelString: translate != undefined ?
                                translate.instant('global.dashboard.timeValues') 
                                : this.translate.instant('global.dashboard.timeValues') 
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: translate != undefined ? 
                                translate.instant('global.dashboard.countValues')
                                : this.translate.instant('global.dashboard.countValues')
                        },
                        ticks: {
                            precision: 0
                        }
                    }]
                },
                title: {
                    display: true,
                    text: translate != undefined ? 
                        translate.instant('global.dashboard.resolvedReceivedTitle')
                        : this.translate.instant('global.dashboard.resolvedReceivedTitle')
                }
            }
        }

        public getChartTypePie(): ChartType {
            return ChartTypeEnum.SINGLEDATASET_PIE;
        }

        public getChartTypeDoughnutName(): ChartType {
            return ChartTypeEnum.SINGLEDATASET_DOUGHNUT;
        }

        public getChartTypeBarName(): ChartType {
            return ChartTypeEnum.SINGLEDATASET_BAR;
        }

        public getChartTypeLineName(): ChartType {
            return ChartTypeEnum.MULTIDATASET_LINE;
        }

        // Generic color palette for Pie, Doughnut and Bar charts
        public getBasicChartColors(): Color[] {
            return [
                {
                    backgroundColor: [
                        '#F94144',
                        '#F3722C',
                        '#F8961E',
                        '#F9844A',
                        '#F9C74F',
                        '#90BE6D',
                        '#43AA8B',
                        '#4D908E',
                        '#577590',
                        '#277DA1'
                    ]
                }
            ];
        }
        
        // color palette for line chart
        public getLineChartColors(): Color[] {
            return [
                {
                    borderColor: '#264653',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: '#33344F',
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointRadius: 3
                },
                {
                    borderColor: '#2A9D8F',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: '#5B5C92',
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointRadius: 3
                },
                {
                    borderColor: '#E9C46A',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: '#D8D87F',
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointRadius: 3
                },
                {
                    borderColor: '#F4A261',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: '#D0CF70',
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointRadius: 3
                },
                {
                    borderColor: '#E76F51',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBackgroundColor: '#B3B158',
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 4,
                    pointRadius: 3
                }
            ]
        }

        // Labels for line charts.
        // Translate key kullanimi ile generic yapilmaya calisilacak.
        public getTimeIntervalDailyLabels(translate?: TranslateService): Label[] {

            let hoursOfADay: Label[] = [
                'translate.zero',
                'translate.one',
                'translate.two',
                'translate.three',
                'translate.four',
                'translate.five',
                'translate.six',
                'translate.seven',
                'translate.eight',
                'translate.nine',
                'translate.ten',
                'translate.eleven',
                'translate.twelve',
                'translate.thirteen',
                'translate.fourteen',
                'translate.fifteen',
                'translate.sixteen',
                'translate.seventeen',
                'translate.eighteen',
                'translate.nineteen',
                'translate.twenty',
                'translate.twentyone',
                'translate.twentytwo',
                'translate.twentythree'
            ];

            let hours: Label[] = [];

            hoursOfADay.forEach(item => {
                hours.push(
                    translate != undefined ? translate.instant(item) : this.translate.instant(item)
                );
            })

            return hours;
        }

        public getTimeIntervalWeeklyLabels(translate?: TranslateService): Label[] {
            
            let daysOfAWeek: Label[] = [
                'translate.monday',
                'translate.tuesday',
                'translate.wednesday',
                'translate.thursday',
                'translate.friday',
                'translate.saturday',
                'translate.sunday'
            ];
            let weeks: Label[] = [];

            daysOfAWeek.forEach(item => {
                weeks.push(
                    translate != undefined ? translate.instant(item) : this.translate.instant(item)
                );
            })

            return weeks;
        }

        public getTimeIntervalMonthlyLabels(): Label[] {

            let totalCountOfDaysInThisMonth = this.getTotalCountOfDaysInThisMonth();

            let daysInAMonth = [
                '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
                '31'
            ];

            if (totalCountOfDaysInThisMonth == 28) {
                return daysInAMonth.slice(-3);
            } else if (totalCountOfDaysInThisMonth == 29) {
                return daysInAMonth.slice(-2);
            } else if (totalCountOfDaysInThisMonth == 30) {
                return daysInAMonth.slice(-1);
            }

            return daysInAMonth;
        }

        public getCurrentChartType(chartType: ChartTypeEnum): ChartType {
            return chartType === ChartTypeEnum.SINGLEDATASET_PIE ? this.getChartTypePie()
                    : chartType === ChartTypeEnum.SINGLEDATASET_DOUGHNUT ? this.getChartTypeDoughnutName()
                        : chartType === ChartTypeEnum.SINGLEDATASET_BAR ? this.getChartTypeBarName()
                            : chartType === ChartTypeEnum.MULTIDATASET_LINE ? this.getChartTypeLineName()
                                : this.getChartTypePie();
        }
        
        public getCurrentChartTypeOptions(chartType: ChartTypeEnum) {
            return chartType === ChartTypeEnum.SINGLEDATASET_PIE ? this.getChartTypePieOptions()
                    : chartType === ChartTypeEnum.SINGLEDATASET_DOUGHNUT ? this.getChartTypeDoughnutOptions()
                        : chartType === ChartTypeEnum.SINGLEDATASET_BAR ? this.getChartTypeBarOptions()
                            : chartType === ChartTypeEnum.MULTIDATASET_LINE ? this.getChartTypeLineOptions()
                                : this.getChartTypePieOptions();
        }

        // For pie, doughnut and bar charts (singleDataSetChartResponse)
        public fillGivenChartData(chart: Chart, extractionIndex: number = 4) {
            const label: string = this.translate.instant('global.dashboard.others')
            let count: number | any = chart.singleDataSetChartResponse.totalDataCount;
        
            chart.chartLabels = [];
            chart.chartData = [];
        
            chart.singleDataSetChartResponse.items = chart.singleDataSetChartResponse.items.slice(0, extractionIndex);
        
            for (let item of chart.singleDataSetChartResponse.items) {
              count -= item.data;
            }
        
            if (chart.singleDataSetChartResponse.totalDataCount > 0) {
              for (let item of chart.singleDataSetChartResponse.items) {
                chart.chartLabels.push(item.label);
                chart.chartData.push(item.data);
              }
        
              if (count > 0) {
                chart.chartLabels.push(label);
                chart.chartData.push(count);
              }
            }
        
            chart.isChartLoaded = true;
        }

        // For customized line chart (lineChartData)
        public fillGivenChartDataSet(chart: Chart, timeIntervalFields: number[], timeIntervalLabels: Label[]) {
            let isTimeIntervalPresent = false;
            let singleDataSet: SingleDataSet = [];


            chart.multiDataSetChartResponse.forEach((chartDataSet: MultiDataSetChartResponse) => {

                singleDataSet = [];
                timeIntervalFields.forEach((timeInterval) => {
                    isTimeIntervalPresent = false;
                    chartDataSet.multiDataSet.forEach((item: MultiDataSetChartItem) => {
                        if (timeInterval == item.data) {
                            singleDataSet.push(item.timeInterval);
                            isTimeIntervalPresent = true;
                        }
                    });

                    if (isTimeIntervalPresent == false) {
                        singleDataSet.push(0);
                    }
                });

                chart.chartDataSet.push(new SingleDataSetWithLabel(singleDataSet, chartDataSet.label));
            });

            chart.chartLabels = timeIntervalLabels;
            chart.isChartLoaded = true;
        }

        // Response'dan dönen time interval (value) değerlerine göre count değerini almak adına hazırlanmış field serisi.
        // Count ve value değerleri dönen response'dan aşağıdaki değerlere göre count değerleri alınır, eğer 
        // response tarafından aşağıdaki value değerine karşılık count değeri gelmemiş ise count değerine 0 atanır.
        dailyTimeIntervalLabels: number[] = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23
        ];
        
        weeklyTimeIntervalLabels: number[] = this.getWeeklyTimeIntervalLabels();

        public getWeeklyTimeIntervalLabels(): number[] {
            let aDayInMilliseconds = 24 * 60 * 60 * 1000;
            let datesOfAWeek = [];
            let currentDate = new Date();
            let monday = new Date(currentDate.getTime() - (currentDate.getDay() - 1) * aDayInMilliseconds);
            let sunday = new Date(monday.getTime() + 6 * aDayInMilliseconds);
            datesOfAWeek.push(monday.getDate());
            for (let i = 1; i < 6; i++){
                datesOfAWeek.push(new Date(monday.getTime() + i * aDayInMilliseconds).getDate());
            }
            datesOfAWeek.push(sunday.getDate());
            return datesOfAWeek;
        }

        monthlyTimeIntervalLabels: number[] = this.getMonthlyTimeIntervalLabels();

        public getMonthlyTimeIntervalLabels(): number[] {

            let totalCountOfDaysInThisMonth = this.getTotalCountOfDaysInThisMonth();

            let daysInAMonth = [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
            ];

            if (totalCountOfDaysInThisMonth == 28) {
                return daysInAMonth.slice(-3);
            } else if (totalCountOfDaysInThisMonth == 29) {
                return daysInAMonth.slice(-2);
            } else if (totalCountOfDaysInThisMonth == 30) {
                return daysInAMonth.slice(-1);
            }

            return daysInAMonth;
        }

        public getTotalCountOfDaysInThisMonth() {
           return new Date(NaN, NaN,0).getDate();
        }
    }

    export enum ChartTypeEnum {
        SINGLEDATASET_PIE = 'pie',
        SINGLEDATASET_DOUGHNUT = 'doughnut',
        SINGLEDATASET_BAR = 'bar',
        MULTIDATASET_LINE = 'line',
        MULTIDATASET_BAR = 'bar'
    }
    
    export class Chart {
        isChartLoaded: boolean;
        currentChartType: ChartType;
        currentChartTypeOptions: any;
        chartColors: Color[];
        chartLabels: Label[];

        chartData: SingleOrMultiDataSet;
        chartDataSet: SingleDataSetWithLabel[];

        singleDataSetChartResponse!: SingleDataSetChartResponse;
        multiDataSetChartResponse: MultiDataSetChartResponse[];
    
        constructor(
            currentChartType?: ChartType,
            currentChartTypeOptions?: any,
            chartColors?: Color[],
            chartLabels?: Label[]
        ) {
          this.isChartLoaded = false;
          this.currentChartType = currentChartType || getChartTypePie();
          this.currentChartTypeOptions = currentChartTypeOptions || getChartTypePieOptions();
          this.chartColors = chartColors || getBasicChartColors();
          this.chartLabels = chartLabels || [];
          this.chartData = [];
          this.chartDataSet = [];
          this.multiDataSetChartResponse = [];
        }
    }
    
    export class SingleDataSetWithLabel {
        data: SingleDataSet
        label: string

        constructor(data?: SingleDataSet, label?: string) {
            this.data = data || [];
            this.label = label || '';
        }
    }
    
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

    // Line chart icin timeInterval labellari eklenecek.
    export const getChartTypePieOptions = ChartUtils.prototype.getChartTypePieOptions;
    export const getChartTypePie = ChartUtils.prototype.getChartTypePie;
    export const getBasicChartColors = ChartUtils.prototype.getBasicChartColors;
}

