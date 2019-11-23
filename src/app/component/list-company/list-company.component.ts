import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { Company } from 'src/app/model/company';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  dataSource = new userDataSource(this.userService);
  displayedColumns: string[] = ['position', 'name', 'address', 'phoneNumber','emailAddress'];

company :Company=new Company();

companies : Observable<Company[]>

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteUser(){
    this.userService.deleteAllCompany()
    .subscribe(
      data=>{
        console.log(data)
        this.reloadData()
      },
      error=>console.log('ERROR' +error))
    
  }
  reloadData() {
    this.companies = this.userService.getAllKindergarten();
  }

}
export class userDataSource extends DataSource<any>{
  constructor(private userService: UserService){
    super();
  }
  connect():Observable<Company[]>{
    return this.userService.getAllCompany();
  }
disconnect(){

}
}
