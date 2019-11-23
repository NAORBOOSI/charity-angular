import { Component, OnInit } from '@angular/core';
import { Getting } from 'src/app/model/getting';
import { UserService } from 'src/app/user.service';
import { DataSource } from '@angular/cdk/table';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-getting',
  templateUrl: './list-getting.component.html',
  styleUrls: ['./list-getting.component.css']
})
export class ListGettingComponent implements OnInit {
  dataSource = new userDataSource(this.userService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id','phoneNumber','address', 'age', 'emailAddress','actions'];
  
  user: Observable<User[]>;
 getting : Observable<Getting[]>;
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.reloadData();
  }

  
  deleteUsers() {
    this.userService.deleteAllGetting()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.user = this.userService.getGettingList();
  }

}
export class userDataSource extends DataSource<any>{
 
constructor(private userService: UserService){
  super();
}
connect():Observable<User[]>{
  return this.userService.getGettingList();
}
disconnect(){

}
}