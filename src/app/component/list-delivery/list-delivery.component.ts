import { Component, OnInit } from '@angular/core';
import{ DataSource } from '@angular/cdk/collections'
import { Delivery } from 'src/app/model/delivery';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.css']
})
export class ListDeliveryComponent implements OnInit {
  dataSource = new userDataSource(this.userService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id','phoneNumber','emailAdrress','actions'];
  
  delivery:Delivery=new Delivery();

  users:Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.reloadData();

  }
  details(){
    return this.userService.getByFirstName;
  }
  deleteUser() {
    this.userService.deleteAllDelivery()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
  reloadData() {
    this.users = this.userService.getGettingList();
  }
}
export class userDataSource extends DataSource<any>{
 
    constructor(private userService: UserService){
      super();
    }
    connect():Observable<Delivery[]>{
      return this.userService.getAllDelivery();
    }
    disconnect(){
    
    }

}
