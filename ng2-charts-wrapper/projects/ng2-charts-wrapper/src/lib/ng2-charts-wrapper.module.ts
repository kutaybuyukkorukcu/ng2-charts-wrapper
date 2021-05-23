import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MultiDataSetChartComponent } from './multi-dataset-chart.component';
import { Ng2ChartsWrapperComponent } from './ng2-charts-wrapper.component';
import { SingleDataSetComponent } from './single-dataset-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    Ng2ChartsWrapperComponent,
    MultiDataSetChartComponent,
    SingleDataSetComponent
  ],
  imports: [
    NgxSpinnerModule,
    ChartsModule,
    HttpClientModule
  ],
  exports: [
    Ng2ChartsWrapperComponent
  ]
})
export class Ng2ChartsWrapperModule { }
