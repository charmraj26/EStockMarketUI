import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatIconModule } from '@angular/material/icon';
import { ManagecompanyComponent } from './managecompany.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ManagecompanyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ]
})
export class ManagecompanyModule { }
