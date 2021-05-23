import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { ChartRequest } from './chartRequest';
import MultiDataSetChartResponse = ChartRequest.MultiDataSetChartResponse;
import SingleDataSetChartResponse = ChartRequest.SingleDataSetChartResponse;
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiCallService {
    constructor(private httpClient: HttpClient) {}

    getChartDataSet(dataset: string): Observable<SingleDataSetChartResponse> {

        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        
        return this.httpClient.get(
            `https://localhost:3000/charts/` + dataset,
            {
                headers: headers
            }
        ).pipe(
            map((data: any) => {
                return data;
            }), catchError(err => {
                return throwError('yo')
            })
        ) 
    }
}