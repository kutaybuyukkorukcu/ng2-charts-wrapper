import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MultiDataSetChartComponent } from './multi-dataset-chart.component';
import { Ng2ChartsWrapperComponent } from './ng2-charts-wrapper.component';
import { SingleDataSetComponent } from './single-dataset-chart.component';
import { HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    Ng2ChartsWrapperComponent,
    MultiDataSetChartComponent,
    SingleDataSetComponent
  ],
  imports: [
    NgxSpinnerModule,
    ChartsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    Ng2ChartsWrapperComponent,
    MultiDataSetChartComponent,
    SingleDataSetComponent
  ]
})
export class Ng2ChartsWrapperModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}