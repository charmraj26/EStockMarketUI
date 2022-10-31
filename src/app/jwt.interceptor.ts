import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


import { LoginService } from './login/login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private inject:Injector){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loginService = this.inject.get(LoginService)
        let token = loginService.GetToken()
        let jwtToken = request.clone({
            setHeaders: {
                Authorization: `Bearer ` + token
            }
        });
        return next.handle(jwtToken);
    }
}




























//    const user =this.loginService.userValue;     
    //    const isOpenIn = user && user.token;
    //    const isGateWayURL = request.url.startsWith(environment.GateWayURL);
    //    if(isOpenIn && isGateWayURL ){
    //    let jwtToken = request.clone({
    //         setHeaders: { Authorization: `Bearer${user.token}`}
    //     });
    //    } 
    //    return next.handle(jwtToken);