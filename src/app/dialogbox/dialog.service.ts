import { Injectable } from '@angular/core';
import { DialogboxComponent } from './dialogbox.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openConfirmDialog(msg: string) {
    return this.dialog.open(DialogboxComponent, {
      width: '350px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '250px' },
      data: {
        message: msg
      }
    });
  }
}
