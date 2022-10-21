import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { CompanyService } from '../managecompany/company.service';
import { StockService } from './stock.service';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  display: {
    dateInput: "MM-DD-YYYY"
  }
};
@Component({
  selector: 'app-managestock',
  templateUrl: './managestock.component.html',
  styleUrls: ['./managestock.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ManagestockComponent implements OnInit {

  public stockdata: any;
  public mangStockForm: any;
  public addstockForm: any;
  public stockUserSubscription: any;
  public averageStock:any;
  public stockPriceDifference: any;
  minimun: any;
  maximum: any;
  average: any;

  constructor(private companyService: CompanyService,
    private stockService: StockService,
    private snackBar: AppService,) {
  }

  ngOnInit() {
    this.getManageStockValue()  //getdata
    this.addStockFormGroupMethod()
  }

  private addStockFormGroupMethod() {
    this.mangStockForm = new FormGroup({
      companyCode: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    });
  }

  public searchStock(companyCode: any, startDate: any, endDate: any) {
    if (!this.mangStockForm.valid) {
      this.snackBar.showSnackBar(`Please provide required values`, 'X');
    }
    this.stockUserSubscription = this.stockService.searchStock(companyCode,startDate,endDate).subscribe((res: any) => {
      if(res.success == true){
        this.snackBar.successSnackBar(res.messages[0], 'X');
         this.averageStock=res.result.stockDetails;
         this.minimun=res.result.stockPriceDifference.minimum;
         this.maximum=res.result.stockPriceDifference.maximum;
         this.average=res.result.stockPriceDifference.average;
      }else{
        this.snackBar.showSnackBar(res.messages[0], 'X');
      }
      
    })
  }

  public getManageStockValue() {
  this.companyService.getCompany().subscribe(data => {   //getdata
      this.stockdata = data.result;
      // this.averageStock=data.result;
    });
  }

  public get m() {
    return this.mangStockForm.controls
  }

}
