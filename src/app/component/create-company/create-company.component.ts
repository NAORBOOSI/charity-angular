import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
company: Company=new Company();
submitted=false;
user: User=new User();

companyResponse: String="welcome";

constructor(private userService : UserService, private dataStorage: DataStorageService) { }

ngOnInit() {
  this.dataStorage.getCreateCompanyResponse().subscribe(
    t =>{
      this.companyResponse= t;
  
}
  )
}
createCompany(){
this.userService.createCompany(this.company)
}

newUser(): void{
this.submitted = false;
this.user=new User;
}

save(){
this.userService.createUser3(this.user)
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
