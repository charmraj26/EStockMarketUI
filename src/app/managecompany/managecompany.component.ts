import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {

  public companyList: any;
  public item: any;

  constructor(private companyService: CompanyService, private snackBar: AppService) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  public getAllCompany() {
    this.companyService.getCompany().subscribe(data => {
      console.log(data.result)
      this.companyList = data.result;
    });
  }

  deleteCompany(companyCode: any) {
    if(confirm('Are you confirm delete records'))
    this.companyService.deleteCompany(companyCode).subscribe(data => {
      if (data.success==true) {
        this.snackBar.successSnackBar(data.messages[0], 'X');
        this.getAllCompany();
      }else{
      this.snackBar.showSnackBar(data.messages[0], 'X');
      }
    });
  }
  

}
