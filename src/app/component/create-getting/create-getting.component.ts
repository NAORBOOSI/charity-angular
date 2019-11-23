import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Getting } from 'src/app/model/getting';
import { UserService } from 'src/app/user.service';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-create-getting',
  templateUrl: './create-getting.component.html',
  styleUrls: ['./create-getting.component.css']
})
export class CreateGettingComponent implements OnInit {

  user: User=new User();
  submitted= false;
  
  getting :Getting= new Getting();
  gettingResponse:String="welcome"
  
  
  
    constructor(private userService:UserService, private dataStorage: DataStorageService) { }
  
    ngOnInit() {
      this.dataStorage.getCreateGettingResponse().subscribe(
        t=>{
          this.gettingResponse=t;
        }
      )
    }
  
    createGetting():void{
      this.userService.createGetting(this.getting)
    }
    newUser(): void{
      this.submitted = false;
      this.user=new User;
    }
  
    save(){
      this.userService.createUser(this.user)
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
  