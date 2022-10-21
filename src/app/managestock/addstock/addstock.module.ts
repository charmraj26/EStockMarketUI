import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddstockComponent } from './addstock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddstockComponent],
  imports: [
   CommonModule,
   MatFormFieldModule,
   MatIconModule,
   RouterModule,
   MatSelectModule,
   MatInputModule,
   ReactiveFormsModule,
   FormsModule
  ]
})
export class AddstockModule { }
