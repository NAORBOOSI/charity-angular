import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Delivery } from 'src/app/model/delivery';
import { UserService } from 'src/app/user.service';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {

user: User=new User();
submitted= false;

delivery :Delivery= new Delivery();
deliverResponse:String="welcome"



  constructor(private userService:UserService, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.getCreateDeliverResponse().subscribe(
      t=>{
        this.deliverResponse=t;
      }
    )
  }

  createDelivery():void{
    this.userService.createDelivery(this.delivery)
  }
  newUser(): void{
    this.submitted = false;
    this.user=new User;
  }

  save(){
    this.userService.createUser2(this.user)
    .subscribe(
      data=>{
        console.log(data);
        this.submitted = true;
      },
      error=>console.log(error));
    this.user=new User;
      
    
  }
  onSubmit(){
    this.save();
  }
}
