import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addStock } from './managestock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public addStockUrl: string = environment.GateWayURL;

  constructor(private http: HttpClient) { }

  public addStock(Stock: addStock): Observable<any> {
    return this.http.post(this.addStockUrl + '/market/stock/add', Stock);
  }

  public searchStock(companyCode: any, startDate: any, endDate: any): Observable<any> {
    return this.http.get(this.addStockUrl + '/market/stock/get/' +  companyCode.value +'/' + startDate.value + '/' +endDate.value);
  }

}
