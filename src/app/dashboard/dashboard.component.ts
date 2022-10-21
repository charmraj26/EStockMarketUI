import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CompanyService } from '../managecompany/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  public updateUserInfo: any;
  public userDetailsData: any;
  public loginUserSubscription: any;
  public latestStockPrice: any;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getAllCompany()
  }

  public getAllCompany() {
    this.companyService.getCompany().subscribe(data => {
      console.log(data.result)
      this.latestStockPrice = data.result;
    });
  }

}




























//date:18.10.2022
// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { LoginService } from '../login/login.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
 
//   public updateUserInfo: any;
//   public userDetailsData: any;
//   public loginUserSubscription: any;

//   constructor(private router: Router, private dialog: MatDialog, private loginService: LoginService) {

//   }

//   ngOnInit(): void {
//     // this.loginUserSubscription = this.loginService.getNewUserInfo().subscribe((info: any) => {
//     //   this.updateUserInfo = info;
//     // });
//   }

//   // public getCurrentUser() {
//   //   this.dialog.open(DashboardComponentPopup);
//   //   console.log(updateUserInfo);
//   // }

//   // public gotologout() {
//   //   this.router.navigate(['/login'])
//   // }

// }

// // popup-component start
// // @Component({
// //   selector: 'dashboard.component.popup',
// //   templateUrl: 'dashboard.component.popup.html',
// // })

// // export class DashboardComponentPopup {
// //   loginUserSubscription: any;
// //   updateUserInfo: any;

// //   constructor(private loginService: LoginService) { }

// //   ngOnInit(): void {
// //     this.loginUserSubscription = this.loginService.getNewUserInfo().subscribe((info: any) => {
// //       this.updateUserInfo = info;
// //     });
// //   }

// //   ngOnDestroy(): void{
// //     this.loginUserSubscription?.unsubscribe();
// //   }

// // }
// // popup-component end
//date:18.10.2022

















// userDetailsData: any = [
  //   { userid: 12, username: 'Ananth', password: '15113366@tT' },
  //   { userid: 22, username: 'Mathan', password: '15113366@tT' },
  //   { userid: 33, username: 'Thiraviyam', password: '15113366@tT' }
  // ]

  // getCurrentUser(user: any): void {
  //   this.dialog.open(user);
  // }
