import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginService } from './login/login.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ManagecompanyModule } from './managecompany/managecompany.module';
import { AddcompanyModule } from './managecompany/addcompany/addcompany.module';
import { CompanyService } from './managecompany/company.service';
import { RegisterService } from './register/register.service';
import { ManagestockModule } from './managestock/managestock.module';
import { AddstockModule } from './managestock/addstock/addstock.module';
import { MatNativeDateModule } from '@angular/material/core';
import { StockService } from './managestock/stock.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './jwt.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    DashboardModule,
    ManagecompanyModule,
    AddcompanyModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ManagestockModule,
    AddstockModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule

  ],
  providers: [LoginService, RegisterService, CompanyService, StockService,
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
