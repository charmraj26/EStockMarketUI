import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagestockComponent } from './managestock.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [ManagestockComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMomentDateModule
   
  ]
})
export class ManagestockModule { }
