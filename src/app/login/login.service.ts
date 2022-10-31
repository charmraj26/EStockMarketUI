import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { loginUserData } from './login.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit {

  public userUrl: string = environment.UserURL;
  public gatewayUrl: string = environment.GateWayURL;

  constructor(private http: HttpClient) {
  }

  public loginuser(userData: loginUserData): Observable<any> {
    return this.http.post(this.gatewayUrl + '/market/user/login', userData)
  }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return localStorage.getItem('token') != null;  //jwt-authGuard
  }

  public GetToken() {
    return localStorage.getItem('token') || '';  //jwt
  }

  public isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;   //logoutbtn
  }

  public removeToken() {
    localStorage.removeItem('token');      //logoutbtn
  }

  public login = new BehaviorSubject(null);
  public getLogin = this.login.asObservable();  //login
  public setLogin(login: any) {
    this.login.next(login);
  }

}



















































// Date:15/10.2022

// import { Injectable, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { loginUserData } from './login.model';

// @Injectable({
//   providedIn: 'root'
// })

// export class LoginService implements OnInit {

//   public userUrl: string = environment.UserURL;
//   public gatewayUrl: string = environment.GateWayURL;
//     loginuserValue: any;

//   constructor(private http: HttpClient) { }

//   private newUser = new BehaviorSubject<any>({
//   });

//   ngOnInit(): void {
//   }

//   public loginuser(userData: loginUserData): Observable<any> {
//     return this.http.post(this.gatewayUrl + '/market/user/login', userData)
//     // const userdetail = this.userDetailsData.filter(e => e.userName == userData?.userName && e.passWord == userData?.passWord);
//     // return of(userdetail);
//   }

//   // public getUserDetails(userId: number): Observable<any> {
//   //   return this.http.get(`${this.baseUrl}/userDetails?userId=` + userId)
//   // //   const userDetail = this.userDetailsData.filter(e => e.userid == userId);
//   // //   return of(userDetail);
//   // }

//   // public getAllUserDetails(): Observable<any[]> {
//   //   return this.http.get<any>(`${this.baseUrl}/userAllDetails`);
//   // //   return of(this.userDetailsData);
//   // }

//   public setNewUserInfo(user: any) {
//     this.newUser.next(user);
//   }

//  public getNewUserInfo() {
//     return this.newUser.asObservable();
//   }

//   public login = new BehaviorSubject(null);
//   public getLogin = this.login.asObservable();
//   public setLogin(login : any){
//     this.login.next(login);
//   }

// }
// Date:15/10.2022

  // public userDetailsData = [
  //   { userid: 12, userName: 'Ananth', passWord: 'Mathanraj5@' },
  //   { userid: 22, userName: 'Manoj', passWord: 'Mathanraj5@' },
  //   { userid: 33, userName: 'Thiraviyam', passWord: 'Mathanraj5@' },
  //   { userid: 12, userName: 'Mathan', passWord: 'Mathanraj5@' },
  //   { userid: 22, userName: 'Shankar', passWord: 'Mathanraj5@' },
  //   { userid: 32, userName: 'a', passWord: 'a' }
  // ]

  // loginuser(userData: loginUserData): Observable<any> {
  //   //return this.http.post(`${this.baseUrl}/login`, userData)
  //   const userdetail = this.userDetailsData.filter(e => e.username == userData?.username && e.password == userData?.password);
  //   return of(userdetail);
  // }

  // getUserDetails(userId: number): Observable<any> {
  //   //return this.http.get(`${this.baseUrl}/userDetails?userId=` + userId)
  //   const userDetail = this.userDetailsData.filter(e => e.userid == userId);

  //   return of(userDetail);
  // }

  // getAllUserDetails(): Observable<any[]> {
  //   //return this.http.get<any>(`${this.baseUrl}/userAllDetails`);
  //   return of(this.userDetailsData);
  // }

  //userlogin(LoginData:any){
  // return this.httpClient.post("https://estockmarket/api/userlogin",LoginData);
  //}

  //userlogin(userId:number){
  // return this.httpclient.get('https.estockmarketapi/userDetails?userId=' + userId);
  //}

  //userlogin(userId:number, Month:number){
  // return this.httpclient.get('https.estockmarketapi/userDetails?userId=' + userId + '&month=' + month);
  //}

//userlogin(userId;number){
/// return this.httpclient.delete('https.estockmarketapi/userDetails?userId=' + userId);
//}
