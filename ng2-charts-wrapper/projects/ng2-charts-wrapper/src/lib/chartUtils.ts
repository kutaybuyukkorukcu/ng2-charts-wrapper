import { TranslateService } from "@ngx-translate/core";
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { TimeInterval } from "./chartModel";
import { Chart, ChartType, SingleOrMultiDataSetWithLabel } from "./chartModel";
import { ChartRequest } from './chartRequest';
import MultiDataSetChartResponse =  ChartRequest.MultiDataSetChartResponse;
import SingleDataSetChartResponse = ChartRequest.SingleDataSetChartResponse;

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

    public getChartTypeLineOptions(translate?: TranslateService, chartOptionsParams?: ChartOptionsParams) {
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
                        display: chartOptionsParams?.xAxeLabel != undefined ? true : false,
                        labelString: chartOptionsParams?.xAxeLabel == undefined ? '' : translate != undefined ?
                            translate.instant(chartOptionsParams.xAxeLabel)
                            : this.translate.instant(chartOptionsParams.xAxeLabel)
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: chartOptionsParams?.yAxeLabel != undefined ? true : false,
                        labelString: chartOptionsParams?.yAxeLabel == undefined ? '' : translate != undefined ?
                            translate.instant(chartOptionsParams.yAxeLabel!)
                            : this.translate.instant(chartOptionsParams.yAxeLabel)
                    },
                    ticks: {
                        precision: 0
                    }
                }]
            },
            title: {
                display: chartOptionsParams?.chartTitle != undefined ? true: false,
                text: chartOptionsParams?.chartTitle == undefined ? '' : translate != undefined ?
                    translate.instant(chartOptionsParams.chartTitle)
                    : this.translate.instant(chartOptionsParams.chartTitle)
            }
        }
    }
    
    public getChartTypeDynamicOptions(translate?: TranslateService, chartOptionsParams?: ChartOptionsParams) {
        return {
            responsive: true,
            legend: {
                position: 'top',
                display: true
            },
            maintainAspectRatio: false,
            plugins: {
                labels: {
                    render: 'value',
                    fontColor: '#000'
                }
            },
            scales: {
                yAxes: [
                    {
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            precision: 0
                        },
                        scaleLabel: {
                            display: chartOptionsParams?.yAxeLabel != undefined ? true : false,
                            labelString: chartOptionsParams?.yAxeLabel == undefined ? '' : translate != undefined ?
                                translate.instant(chartOptionsParams.yAxeLabel!)
                                : this.translate.instant(chartOptionsParams.yAxeLabel)
                        }
                    }
                ],
                xAxes: [
                    {
                        display: true,
                        ticks: {
                            padding: 5
                        },
                        scaleLabel: {
                            display: chartOptionsParams?.xAxeLabel != undefined ? true : false,
                            labelString: chartOptionsParams?.xAxeLabel == undefined ? '' : translate != undefined ?
                                translate.instant(chartOptionsParams.xAxeLabel)
                                : this.translate.instant(chartOptionsParams.xAxeLabel)
                        }
                    }
                ]
            },
            title: {
                display: chartOptionsParams?.chartTitle != undefined ? true: false,
                text: chartOptionsParams?.chartTitle == undefined ? '' : translate != undefined ?
                    translate.instant(chartOptionsParams.chartTitle)
                    : this.translate.instant(chartOptionsParams.chartTitle)
            }
        }
    }

    public getChartTypePie(): ChartType {
        return ChartType.PIE;
    }

    public getChartTypeDoughnut(): ChartType {
        return ChartType.DOUGHNUT;
    }

    public getChartTypeBar(): ChartType {
        return ChartType.BAR;
    }

    public getChartTypeLine(): ChartType {
        return ChartType.LINE;
    }

    public getChartTypeRadar(): ChartType {
        return ChartType.RADAR;
    }

    public getChartTypePolar(): ChartType { 
        return ChartType.POLAR;
    };

    public getChartTypeDynamic(): ChartType {
        return ChartType.DYNAMIC;
    }

    // Generic color palette for Pie, Doughnut and Bar charts
    public getSingleDataSetChartColors(): Color[] {
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
    public getMultiDataSetChartColors(): Color[] {
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

    
    public getChartTypeNames(translate?: TranslateService): string[] {
        
        let chartTypeEnumValues: string[] = [
            'chartType.pie',
            'chartType.doughnut',
            'chartType.bar',
            'chartType.line',
            'chartType.radar',
            'chartType.polar',
            'chartType.bubble',
            'chartType.scatter',
            'chartType.dynamic'
        ];

        let chartTypeNames: string[] = [];

        chartTypeEnumValues.forEach(item => {
            chartTypeNames = [...chartTypeNames, translate != undefined ? translate.instant(item): this.translate.instant(item)]
        })

        return chartTypeNames;
    }

    public getTimeIntervalNames(translate?: TranslateService): string[] {
        
        let timeIntervalEnumValues: string[] = [
            'timeInterval.header.daily',
            'timeInterval.header.weekly',
            'timeInterval.header.monthly',
            'timeInterval.header.quarter1',
            'timeInterval.header.quarter2',
            'timeInterval.header.quarter3',
            'timeInterval.header.quarter4',
        ];

        let timeIntervalNames: string[] = [];

        timeIntervalEnumValues.forEach(item => {
            timeIntervalNames.push(
                translate != undefined ? translate.instant(item) : this.translate.instant(item)
            );
        })

        return timeIntervalNames;
    }

    public getTimeIntervalDailyLabels(translate?: TranslateService): Label[] {

        let hoursOfADay: Label[] = [
            'timeInterval.day.zero',
            'timeInterval.day.one',
            'timeInterval.day.two',
            'timeInterval.day.three',
            'timeInterval.day.four',
            'timeInterval.day.five',
            'timeInterval.day.six',
            'timeInterval.day.seven',
            'timeInterval.day.eight',
            'timeInterval.day.nine',
            'timeInterval.day.ten',
            'timeInterval.day.eleven',
            'timeInterval.day.twelve',
            'timeInterval.day.thirteen',
            'timeInterval.day.fourteen',
            'timeInterval.day.fifteen',
            'timeInterval.day.sixteen',
            'timeInterval.day.seventeen',
            'timeInterval.day.eighteen',
            'timeInterval.day.nineteen',
            'timeInterval.day.twenty',
            'timeInterval.day.twentyone',
            'timeInterval.day.twentytwo',
            'timeInterval.day.twentythree'
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
            'timeInterval.week.monday',
            'timeInterval.week.tuesday',
            'timeInterval.week.wednesday',
            'timeInterval.week.thursday',
            'timeInterval.week.friday',
            'timeInterval.week.saturday',
            'timeInterval.week.sunday'
        ];
        let weeks: Label[] = [];

        daysOfAWeek.forEach(item => {
            weeks.push(
                translate != undefined ? translate.instant(item) : this.translate.instant(item)
            );
        })

        return weeks;
    }

    public getTimeIntervalMonthlyLabels(translate?: TranslateService): Label[] {

        const weeksInMonth = this.getWeeksInMonth();

        let weeksOfAMonth: Label[] = [];

        if (weeksInMonth.length == 4) {
            weeksOfAMonth = [
                'timeInterval.month.first',
                'timeInterval.month.second',
                'timeInterval.month.third',
                'timeInterval.month.fourth'
            ];
        } else if (weeksInMonth.length == 5) {
            weeksOfAMonth = [
                'timeInterval.month.first',
                'timeInterval.month.second',
                'timeInterval.month.third',
                'timeInterval.month.fourth',
                'timeInterval.month.fifth'
            ];
        } else {
            weeksOfAMonth = [
                'timeInterval.month.first',
                'timeInterval.month.second',
                'timeInterval.month.third',
                'timeInterval.month.fourth'
            ];
        }

        let weeks: Label[] = [];

        weeksOfAMonth.forEach(item => {
            weeks = [
                ...weeks, translate != undefined ? translate.instant(item) : this.translate.instant(item)
            ];
        })

        return weeks;
    }

    public getCurrentChartType(chartType: ChartType): ChartType {
        return chartType == ChartType.PIE ? this.getChartTypePie()
            : chartType == ChartType.DOUGHNUT ? this.getChartTypeDoughnut()
            : chartType == ChartType.BAR ? this.getChartTypeBar()
            : chartType == ChartType.LINE ? this.getChartTypeLine()
            : chartType == ChartType.RADAR ? this.getChartTypePie()
            : chartType == ChartType.POLAR ? this.getChartTypePie()
            : chartType == ChartType.BUBBLE ? this.getChartTypePie()
            : chartType == ChartType.SCATTER ? this.getChartTypePie()
            : chartType == ChartType.DYNAMIC ? this.getChartTypeDynamic()
            : this.getChartTypePie();
    }
    
    public getCurrentChartTypeOptions(chartType: ChartType) {
        return chartType == ChartType.PIE ? this.getChartTypePieOptions()
            : chartType == ChartType.DOUGHNUT ? this.getChartTypeDoughnutOptions()
            : chartType == ChartType.BAR ? this.getChartTypeBarOptions()
            : chartType == ChartType.LINE ? this.getChartTypeLineOptions()
            : chartType == ChartType.RADAR ? this.getChartTypePieOptions()
            : chartType == ChartType.POLAR ? this.getChartTypePieOptions()
            : chartType == ChartType.BUBBLE ? this.getChartTypePieOptions()
            : chartType == ChartType.SCATTER ? this.getChartTypePieOptions()
            : chartType == ChartType.DYNAMIC ? this.getChartTypeDynamicOptions()
            : this.getChartTypePieOptions();
    }

    public getCurrentChartColors(chartType: ChartType): Color[] {

        if (chartType == ChartType.BAR || 
            chartType == ChartType.PIE ||
            chartType == ChartType.DOUGHNUT
        ) {
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
        ];
    }

    public resetChartByChartType(chart: Chart, chartType: ChartType): Chart {

        chart.currentChartType = this.getCurrentChartType(chartType);
        chart.currentChartTypeOptions = this.getCurrentChartTypeOptions(chartType);
        chart.chartColors = this.getCurrentChartColors(chartType);
        chart.chartData = [];
        chart.chartDataSet = [];
        chart.currentTimeInterval = chart.currentTimeInterval;

        return chart;
    }

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

    public getWeeksInMonth(): any[] {

        const currentYear: number = new Date().getFullYear();
        const currentMonth: number = new Date().getMonth();

        const weeks: any[] = [],
          firstDate: Date = new Date(currentYear, currentMonth, 1),
          lastDate: Date = new Date(currentYear, currentMonth + 1, 0),
          numDays: number = lastDate.getDate();
      
        let dayOfWeekCounter = firstDate.getDay();
      
        for (let date = 1; date <= numDays; date++) {
          if (dayOfWeekCounter === 0 || weeks.length === 0) {
            weeks.push([]);
          }
          weeks[weeks.length - 1].push(date);
          dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
        }
      
        return weeks.filter((w) => !!w.length);
    }

    public getTotalCountOfDaysInThisMonth() {
       return new Date(NaN, NaN,0).getDate();
    }

    // For pie, doughnut and bar charts (singleDataSetChartResponse)
    public fillGivenChartData(chart: Chart, singleDataSetChartResponse: SingleDataSetChartResponse, extractionIndex: number = 4) {
        const label: string = this.translate.instant('Others')
        let count: number | any = singleDataSetChartResponse.totalDataCount;

        chart.chartLabels = [];
        chart.chartData = [];

        singleDataSetChartResponse.singleDataSet = singleDataSetChartResponse.singleDataSet.slice(0, extractionIndex);

        for (let item of singleDataSetChartResponse.singleDataSet) {
            count -= item.data;
        }

        if (singleDataSetChartResponse.totalDataCount > 0) {
            for (let item of singleDataSetChartResponse.singleDataSet) {
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
    public fillGivenChartDataSet(chart: Chart, multiDataSetChartResponse: MultiDataSetChartResponse[], timeIntervalFields: number[], timeIntervalLabels: Label[]) {
        let isTimeIntervalPresent = false;
        let singleDataSet: SingleDataSet = [];

        multiDataSetChartResponse.forEach((chartDataSet: MultiDataSetChartResponse) => {

            singleDataSet = [];
            timeIntervalFields.forEach((timeInterval) => {
                isTimeIntervalPresent = false;
                chartDataSet.multiDataSet.forEach((item) => {
                    if (timeInterval == item.data) {
                        singleDataSet.push(item.timeInterval);
                        isTimeIntervalPresent = true;
                    }
                });

                if (isTimeIntervalPresent == false) {
                    singleDataSet.push(0);
                }
            });

            // For monthly we have to alter the chart data since we dont wanna show days of a month and use weeks in a month as labels.
            // Basically chart data (array) has 28-29, 30 or 31 data in it (depending on the month) (1,2,3,4,5,6,7 ...)
            // each number representing the day in a month. What we do with below code is creating an array of 5 filled with chart data.
            // (first week, second week, third week ...)
            if (TimeInterval.MONTHLY == chart.currentTimeInterval) {
                const weeks = this.getWeeksInMonth();
                
                let monthlyAlteredDataSet: any[] = [];

                weeks.map((week: any[]) => {
                    let sumOfDataForWeek: number = 0;
                    week.map((i) => {
                        sumOfDataForWeek += Number(singleDataSet[i - 1]);
                    })
                    monthlyAlteredDataSet.push(sumOfDataForWeek);
                })

                singleDataSet = monthlyAlteredDataSet;
                monthlyAlteredDataSet = [];
            }

            chart.chartDataSet.push(new SingleOrMultiDataSetWithLabel(singleDataSet, chartDataSet.label));
        });

        chart.chartLabels = timeIntervalLabels;
        chart.isChartLoaded = true;
    }
}

export interface ChartOptionsParams {
    yAxeLabel?: string;
    xAxeLabel?: string;
    chartTitle?: string;
}

export const getChartTypePieOptions = ChartUtils.prototype.getChartTypePieOptions;
export const getChartTypePie = ChartUtils.prototype.getChartTypePie;
export const getSingleDataSetChartColors = ChartUtils.prototype.getSingleDataSetChartColors;