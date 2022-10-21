import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcompanyComponent } from './addcompany.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [AddcompanyComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatSelectModule
  ]
})
export class AddcompanyModule { }
