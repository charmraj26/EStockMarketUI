import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { loginUserData } from './login.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  public myimage: string = "assets/img/stoc.jpg"
  public mycardimage: string = "assets/img/headne.jpg"
  public hideEye: boolean = true;
  public loginForm: FormGroup | any;
  public loginData: any;
  private loginUserSubscription: any;
  public responsedata: any;

  // constructor start
  constructor(private router: Router,
    private loginService: LoginService,
    private snackBar: AppService) {
    this.loginData = [];
  }
  // constructor end

  // ngOnInit start
  ngOnInit(): void {
    this.loginFormGroupMethod();
  }
  // ngOnInit end

  // loginFormGroupMethod start
  private loginFormGroupMethod() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
    });
  }
  // loginFormGroupMethod end

  // userlogin start Login Button
  public loginuser() {
    if (!this.loginForm.valid) {
      this.snackBar.showSnackBar(`Please provide user details`, 'X');
    }
    else {
      let loginData = new loginUserData();
      loginData.userName = this.f.userName.value;
      loginData.passWord = this.f.passWord.value;

      // this.loginService.setNewUserInfo({
      //   userName: this.f.userName.value,
      //   passWord: this.f.passWord.value,
      // });
      this.loginUserSubscription = this.loginService.loginuser(loginData).subscribe((data: any) => {
        if (data.success == true) {
          this.responsedata = data;
          localStorage.setItem('token', this.responsedata.result.token);
          this.loginService.setLogin(data);
          // this.snackBar.showSnackBar(data.messages[0], 'X');
          this.router.navigate(['/dashboard']);
        }
        else {
          this.snackBar.successSnackBar(data.messages[0], 'X');
        }
      })
    }
  }
  // userlogin end

  public get f() {
    return this.loginForm.controls;
  }

  ngOnDestroy(): void {
    this.loginUserSubscription?.unsubscribe();
  }

}
























//   public userlogin() {
//   if (!this.loginForm.valid) {
//     alert('Please provide required values');
//   }
//   else {
//     let loginData = new loginUserData();
//     loginData.username = this.f.username.value;
//     loginData.password = this.f.password.value;

//      this.loginData.push(this.loginForm.value)

//     this.loginUserSubscription = this.loginService.loginuser(loginData).subscribe((data: any) => {
//       if (data.length === 0) {
//         alert('Invalid User Name or Password');
//       }
//       else {
//         localStorage.setItem('loginSer', this.loginForm.value);
//         this.router.navigate(['/dashboard']);
//       }
//       this.loginService.setNewUserInfo({
//         username: this.username,
//         password: this.password
//       });
//     })
//   }
// }

// getCurrentUser(user: any): void {
//   console.log(user);
// }

//   public get f() {
//   return this.loginForm.controls;
// }

// ngOnDestroy(): void {
//   this.loginUserSubscription?.unsubscribe();
// }


