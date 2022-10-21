import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { companyUserData } from './managecompany.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public companyUrl: string = environment.GateWayURL;

  constructor(private http: HttpClient) { }

  public saveCompany(userData: companyUserData): Observable<any> {
    return this.http.post(this.companyUrl + '/market/company/register',userData);
  }

  public getCompany(): Observable<any>{
    return this.http.get(this.companyUrl + '/market/company/getall');
  }
 
  deleteCompany(companyCode:any):Observable<any>{
    return this.http.delete(this.companyUrl + '/market/company/delete/' + companyCode);
  }

}












//Date:18.10.2022

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { userData } from '../login/login.model';
// import { companyUserData } from './managecompany.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class CompanyService {

//   public companyUrl: string = environment.GateWayURL;

//   constructor(private http: HttpClient) { }

//   public saveCompany(userData: companyUserData): Observable<any> {
//     return this.http.post(this.companyUrl + '/market/company/register', userData)
//   }

//   public getCompany(): Observable<any>{
//     return this.http.get(this.companyUrl + '/market/company/getall')

//   }

//   // // New Method Start
//   // addvalue = [{
//   //   "companyCode": "",
//   //   "companyName": "",
//   //   "companyCeo": "",
//   //   "companyWebsite": "",
//   //   "stockExchange": "",
//   //   "companyTurnover": ""
  
//   // }];
//   // // New Method End

//   // // New Method Start
//   // getData() {
//   //   return this.addvalue;
//   // }

//   // saveData(input: any) {
//   //   this.addvalue.push(input)
//   // }
//   // // New Method End

//   // private newAdd = new BehaviorSubject<any>({
//   // });

//   // public setNewAddInfo(add: any) {
//   //   this.newAdd.next(add);
//   // }

//   // public getNewAddInfo() {
//   //   return this.newAdd.asObservable();
//   // }

// }

//Date:18.10.2022






