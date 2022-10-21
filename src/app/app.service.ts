import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private snackBar:MatSnackBar) { }


  public showSnackBar(displayMessage: string, buttonText: string) {
    this.snackBar.open(displayMessage, buttonText, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['failure-snackbar', 'btnfail-snackbar']
    })
  }

  public successSnackBar(displayMessage: string, buttonText: string) {
    this.snackBar.open(displayMessage, buttonText, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar', 'btnsuc-snackbar']
    })
  }

}
