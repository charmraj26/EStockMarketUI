import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DialogService } from '../dialogbox/dialog.service';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {

  public companyList: any;
  public manageCompanySubscription: any;
CompanyName: any;

  constructor(private companyService: CompanyService,
    private snackBar: AppService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  public getAllCompany() {
    this.companyService.getCompany().subscribe(data => {
      this.companyList = data.result;
      // this.data.result.stockExchange === '1'?'NSE':'BSE';
    });
  }

  deleteCompany(companyCode: any, companyName: any) {
    this.dialogService.openConfirmDialog('Are you confirm to delete ?' + ' ' + companyName)
      .afterClosed().subscribe(res => {
        if (res) {
          this.manageCompanySubscription=this.companyService.deleteCompany(companyCode).subscribe(data => {
            if (data.success == true) {
              this.snackBar.successSnackBar(data.messages[0], 'X');
              this.getAllCompany();
            } else {
              this.snackBar.showSnackBar(data.messages[0], 'X');
            }
          })
        }
      })
  }

  ngOnDestroy(): void {
    this.manageCompanySubscription?.unsubscribe();
  }


}
