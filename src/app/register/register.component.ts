import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { registerUserData } from './register.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public mycardimage: string = "/assets/img/headne.jpg"
  public registerForm: FormGroup | any;
  public hideEyep: boolean = true;
  public hideEyesp: boolean = true;
  public registerUserSubscription: any;
  public responsedata: any;

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private snackBar: AppService) {
  }

  ngOnInit(): void {
    this.registerFormgGoupMethod();
  }

  private registerFormgGoupMethod() {
    this.registerForm = this.formbuilder.group({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
      surepassWord: new FormControl('', Validators.required),
    }, {
      validators: this.MustMatch('passWord', 'surepassWord')
    }
    )
  }

  public MustMatch(passWord: any, surepassWord: any) {
    return (formGroup: FormGroup) => {
      const passWordcontrol = formGroup.controls[passWord];
      const surepassWordcontrol = formGroup.controls[surepassWord];
      if (surepassWordcontrol.errors && !surepassWordcontrol.errors['MustMatch']) {
        return;
      }
      if (passWordcontrol.value !== surepassWordcontrol.value) {
        surepassWordcontrol.setErrors({ MustMatch: true });
      }
      else {
        surepassWordcontrol.setErrors(null);
      }
    };
  }

  public userregister() {
    if (!this.registerForm.valid) {
      this.snackBar.showSnackBar(`Please provide all required fields`, 'X');
    }
    else {
      let registerData = new registerUserData();
      registerData.userName = this.r.userName.value;
      registerData.passWord = this.r.passWord.value;

      this.registerUserSubscription = this.registerService.registeruser(registerData).subscribe((data: any) => {
        if (data.success == true) {
          this.responsedata = data;
          localStorage.setItem('token', this.responsedata.result.token);
          // this.registerService.setRegister(data);
          this.snackBar.successSnackBar(data.messages[0], 'X');
          this.router.navigate(['/login'])
        } else {
          this.snackBar.showSnackBar(data.messages[0], 'X');
        }
      });
    }
  }

  public get r() {
    return this.registerForm.controls;
  }

  ngOnDestroy(): void {
    this.registerUserSubscription?.unsubscribe();
  }

}





// Last Start

// export class RegisterComponent implements OnInit {
//   public mycardimage: string = "/assets/img/headne.jpg"
//   public registerForm: FormGroup | any;
//   public hideEyep: boolean = true;
//   public hideEyesp: boolean = true;
//   public loginsubscription: any;

//   constructor(private formbuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

//   ngOnInit(): void {
//     this.registerFormgGoupMethod();
//   }

//   private registerFormgGoupMethod() {
//     this.registerForm = this.formbuilder.group({
//       userName: new FormControl('', Validators.required),
//       passWord: new FormControl('', Validators.required),
//       surepassWord: new FormControl('', Validators.required),
//     }, {
//       validators: this.MustMatch('passWord', 'surepassWord')
//     }
//     )
//   }

//   public MustMatch(passWord: any, surepassWord: any) {
//     return (formGroup: FormGroup) => {
//       const passWordcontrol = formGroup.controls[passWord];
//       const surepassWordcontrol = formGroup.controls[surepassWord];
//       if (surepassWordcontrol.errors && !surepassWordcontrol.errors['MustMatch']) {
//         return;
//       }
//       if (passWordcontrol.value !== surepassWordcontrol.value) {
//         surepassWordcontrol.setErrors({ MustMatch: true });
//       }
//       else {
//         surepassWordcontrol.setErrors(null);
//       }
//     };
//   }

//   public userregister() {
//     if (!this.registerForm.valid) {
//       alert(`Please provide required values`);
//       return
//     }

//     localStorage.setItem('user', this.registerForm.valid)
//     this.loginsubscription = this.loginService.setLogin(this.registerForm.value)
//     this.router.navigate(['/dashboard'])
//   }

//   public get r() {
//     return this.registerForm.controls;
//   }

//   public gotoCancel() {
//     this.router.navigate(['/login'])
//   }

// }

// Last end







































  // public userregister() {
  //   if (!this.registerForm.valid) {
  //     alert(`Please provide required values`);
  //   }
  //   else {
  //     let loginData = new loginUserData();
  //     loginData.username = this.r.username.value;
  //     loginData.password = this.r.password.value;

  //     this.registerUserSubscription = this.registerService.registeruser(loginData).subscribe((data: any) => {
  //       if (data.length === 0) {
  //         alert('Invalid User Name or Password');
  //       }
  //       else {
  //         localStorage.setItem('user', this.registerForm.value);
  //         this.router.navigate(['/dashboard']);
  //       }
  //       this.registerService.setNewUserInfo({
  //         username: this.r.username.value,
  //         password: this.r.password.value,
  //       });
  //     })
  //   }



