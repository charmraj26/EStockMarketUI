import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'estockmarket';
  public dasheadimg: string = 'assets/img/headne.jpg';
  public isOpen: boolean = false;
  public loginSubscription: any;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginSubscription = this.loginService.getLogin.subscribe((data: any) => {
      if (data !== null && data !== undefined) {
        this.isOpen = true;
      }
    });
  }

  public logoutUser() {
    this.loginService.removeToken();       // logout
    this.router.navigateByUrl('/login');
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

}
