import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerUserData } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {

  public registerUrl: string = environment.GateWayURL;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public registeruser(userData: registerUserData): Observable<any> {
    return this.http.post(this.registerUrl + '/market/user/register', userData)
  }

}
