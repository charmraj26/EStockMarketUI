import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { AddcompanyComponent } from './managecompany/addcompany/addcompany.component';
import { ManagestockComponent } from './managestock/managestock.component';
import { AddstockComponent } from './managestock/addstock/addstock.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path: 'managecompany', component:ManagecompanyComponent,canActivate:[AuthGuard]},
  {path: 'addcompany', component:AddcompanyComponent,canActivate:[AuthGuard]},
  {path: 'managestock', component:ManagestockComponent,canActivate:[AuthGuard]},
  {path: 'addstock', component:AddstockComponent,canActivate:[AuthGuard]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
