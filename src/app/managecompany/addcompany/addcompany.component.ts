import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CompanyService } from '../company.service';
import { companyUserData } from '../managecompany.model';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  public addCompanySubscription: any;
  public addForm: any;
  public addCompanyData: any;
 
  constructor(private router: Router, 
    private companyService: CompanyService, 
    private snackBar: AppService){
    }

  ngOnInit(): void {
    this.addFormGroupMethod();
  }

  select = [ 
    {id:1,name:'NSE'},
    {id:2,name:'BSE'}
  ]
  
  private addFormGroupMethod() {
    this.addForm = new FormGroup({
      companyCode: new FormControl('', [Validators.required]),
      companyCeo: new FormControl('', [Validators.required]),
      stockExchange: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      companyWebsite: new FormControl('', [Validators.required]),
      companyTurnover: new FormControl('', [Validators.required]),
    });
  }

  public saveCompany() {
    if (!this.addForm.valid) {
      this.snackBar.showSnackBar(`Please provide required values`, 'X');
    }
    else {
      let addCompanyData = new companyUserData();
      addCompanyData.companyCode = this.c.companyCode.value;
      addCompanyData.companyName = this.c.companyName.value;
      addCompanyData.companyCeo = this.c.companyCeo.value;
      addCompanyData.companyWebsite = this.c.companyWebsite.value;
      addCompanyData.stockExchange = this.c.stockExchange.value;
      addCompanyData.companyTurnover = this.c.companyTurnover.value;

    this.addCompanySubscription = this.companyService.saveCompany(addCompanyData).subscribe((data:any) => {
      if (data.success == true){
       this.snackBar.successSnackBar(data.messages[0], 'X')
       this.router.navigate(['/managecompany']);
  }
  else{
        this.snackBar.showSnackBar(data.messages[0], 'X');
       }
    })
  }
  }
  
  public get c() {
    return this.addForm.controls;
  }

  ngOnDestroy(): void {
    this.addCompanySubscription?.unsubscribe();
  }

}















// Date:18.10.2022
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginService } from 'src/app/login/login.service';
// import { StockService } from 'src/app/managestock/stock.service';
// import { CompanyService } from '../company.service';
// import { companyUserData } from '../managecompany.model';

// @Component({
//   selector: 'app-addcompany',
//   templateUrl: './addcompany.component.html',
//   styleUrls: ['./addcompany.component.css']
// })
// export class AddcompanyComponent implements OnInit {
//   public addForm: any;
//   public addCompanySubscription: any;
//   public addCompanyData: any;
//   public stockobj: any;
//   public responsedata: any;

//   constructor(private router: Router, private companyService: CompanyService, private stockService: StockService, private loginService: LoginService){}

//   ngOnInit(): void {
//     this.addFormGroupMethod();
//   }

//   private addFormGroupMethod() {
//     this.addForm = new FormGroup({
//       companyCode: new FormControl('', [Validators.required]),
//       companyCeo: new FormControl('', [Validators.required]),
//       stockExchange: new FormControl('', [Validators.required]),
//       companyName: new FormControl('', [Validators.required]),
//       companyWebsite: new FormControl('', [Validators.required]),
//       companyTurnover: new FormControl('', [Validators.required,Validators.minLength(9)])
//     });
//   }

//   // addobj = {
//   //   "companyCode": "",
//   //   "companyCeo": "",
//   //   "stockExchange": "",
//   //   "companyName": "",
//   //   "companyWebsite": "",
//   //   "companyTurnover": "",
//   // };

//   // addCompanyStock = {
//   //   "companyName": "",
//   // }

//   public saveCompany(
//     companyCode: any, companyCeo: any, stockExchange: any,
//     companyName: any, companyWebsite: any, companyTurnover: any) {

//     if (!this.addForm.valid) {
//       this.loginService.showSnackBar(`Please provide required values`, 'OK');
//     }
//     else {
//       let addCompanyData = new companyUserData();
//       addCompanyData.companyCode = this.c.companyCode.value;
//       addCompanyData.companyName = this.c.companyName.value;
//       addCompanyData.companyCeo = this.c.companyCeo.value;
//       addCompanyData.companyWebsite = this.c.companyWebsite.value;
//       addCompanyData.stockExchange = this.c.stockExchange.value;
//       addCompanyData.companyTurnover = this.c.companyTurnover.value;
    
//     // // New Method Start
//     // this.addobj = {
//     //   "companyCode": companyCode,
//     //   "companyCeo": companyCeo,
//     //   "stockExchange": stockExchange,
//     //   "companyName": companyName,
//     //   "companyWebsite": companyWebsite,
//     //   "companyTurnover": companyTurnover
//     // };
//     // this.companyService.saveData(this.addobj);
//     // // New Method End

//     this.stockobj ={"companyName": companyName} 
//     this.stockService.saveStock(this.stockobj);

//     this.addCompanySubscription = this.companyService.saveCompany(addCompanyData).subscribe((data:any) => {
//       if (data.success == true){
//         this.responsedata = data;
//         localStorage.setItem('token', this.responsedata.result.token);
//         this.loginService.showSnackBar(data.messages[0], 'OK');
//     this.router.navigate(['/managecompany']);
//   }else{
//         this.loginService.showSnackBar(data.messages[0], 'OK');
//        }
//     })

//     // this.manageCompanyService.setNewAddInfo({
//     //   companyCode: this.c.companyCode.value,
//     //   companyName: this.c.companyName.value,
//     //   companyCeo: this.c.companyCeo.value,
//     //   companyWebsite: this.c.companyWebsite.value,
//     //   stockExchange: this.c.stockExchange.value,
//     //   companyTurnover: this.c.companyTurnover.value,
//     // });
//   }
//   }
  
//   public get c() {
//     return this.addForm.controls;
//   }

//   ngOnDestroy(): void {
//     this.addCompanySubscription?.unsubscribe();
//   }

// }

// Date:18.10.2022