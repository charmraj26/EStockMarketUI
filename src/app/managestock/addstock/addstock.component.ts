import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CompanyService } from 'src/app/managecompany/company.service';
import { addStock } from '../managestock.model';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {
  public stockForm: any;
  public addStockSubscription: any;
  public stockValue: any;

  constructor(private router: Router,
    private stockService: StockService,
    private snackBar: AppService, private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.stockFormGroupMethod()
    this.getAddStockValue()        //getdata
  }

  private stockFormGroupMethod() {
    this.stockForm = new FormGroup({
      companyCode: new FormControl('', Validators.required),
      stockPrice: new FormControl('', Validators.required),
    });
  }

  public addStock() {
    if (!this.stockForm.valid) {
      this.snackBar.showSnackBar(`Please provide required values`, 'X');
    }
    else {
      let addStockData = new addStock();
      addStockData.companyCode = this.s.companyCode.value;
      addStockData.stockPrice = this.s.stockPrice.value;

      this.addStockSubscription = this.stockService.addStock(addStockData).subscribe((data: any) => {
        if (data.success == true) {
          this.snackBar.showSnackBar(data.messages[0], 'X')
          this.router.navigate(['/dashboard']);
        }
        else {
          this.snackBar.showSnackBar(data.messages[0], 'X');
        }
      })
    }
  }

  public getAddStockValue() {
    this.companyService.getCompany().subscribe(data => {  //getdata
      this.stockValue = data.result;
    });
  }

  public get s() {
    return this.stockForm.controls
  }

  ngOnDestroy(): void {
    this.addStockSubscription?.unsubscribe();
  }

}
