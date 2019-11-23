import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Getting } from 'src/app/model/getting';
import { UserService } from 'src/app/user.service';
import { DataStorageService } from 'src/app/data-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
user: User=new User();
submitted=false;
getting:Getting= new Getting();
gettingResponse:String ="welcom";
selectedFile : File=null;


  constructor(private userService : UserService,private dataStorage:DataStorageService,
    private http:HttpClient) { }

  ngOnInit() {
    this.dataStorage.getCreateGettingResponse().subscribe(
      t =>{
        this.gettingResponse = t;
      }
    )
  }
  createGetting(): void{
  this.userService.createGetting(this.getting);
}
newUser():void{
  this.submitted=false;
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
    onFileSelected(event){
      this.selectedFile=<File>event.target.files[0];
  
    }
    onUpload(){
      const fd=new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name);
  this.http.post('http://localhost:8080/api/uploadImage',fd)
  .subscribe(res=>{
    console.log(res);
  })
    }
  onSubmit(){
    this.save();
  }
}



