import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { Getting } from './model/getting';
import { Delivery } from './model/delivery';
import { HttpClient } from '@angular/common/http';
import { Company } from './model/company';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x : string]: any;
  private baseUrl ='http://localhost:8080/api';
  


  constructor(private http: HttpClient, private dataStorage:DataStorageService) {} 
    getAllGetting(): Observable<Getting[]>{
      return this.http.get<Getting[]>(this.baseUrl+'/listAllGetting')
    }

    getAllDelivery(): Observable<Delivery[]>{
      return this.http.get<Delivery[]>(this.baseUrl+'/listDelivery')
    }
    getAllCompany(): Observable<Company[]>{
      return this.http.get<Company[]>(this.baseUrl+'/listAllCompany')
    }

    getByFirstName(gatting: any): Observable<any>{
      return this.http.get(this.baseUrl+'/gatting/${firstName}');
    }

    createDelivery(delivery : Delivery): void{
      this.http.post(this.baseUrl+'/Delivery',delivery).subscribe(
        data=>{
          console.log(data);
          
          this.dataStorage.setCreateDeliverResponse(JSON.stringify(data));
        },
        error=>console.log(error));
      
    }

    createGetting(getting : Getting): void{
      this.http.post(this.baseUrl+'/Getting',getting).subscribe(
        data=>{
          console.log(data);
          
          this.dataStorage.setCreateGettingResponse(JSON.stringify(data));
        },
        error=>console.log(error));

  }
  createCompany(company : Company): void{
    this.http.post(this.baseUrl+'/addCompany',company).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateCompanyResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  createUser(user : any): Observable<any>{
    return this.http.post('${this.baseUrl}/getting',user);
  }
  
  createUser2(user : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Delivery}',user);
  }
  createUser3(user : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Company}',user);
  }

  deleteUser(gettingId : string){
    this.http.post(this.baseUrl,parent).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateGettingResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  getDeliveryList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getGettingList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getCompanyList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  deleteAllCompany() : Observable<any>{
    return this.http.delete(this.baseUrl+'/company/delete');
  }
  deleteAllDelivery() : Observable<any>{
    return this.http.delete(this.baseUrl+'/delivery/delete');
  }
  deleteAllGetting() : Observable<any>{
    return this.http.delete(this.baseUrl+'/getting/delete');
  }
  
 
  deleteAllCildren() : Observable<any>{
    return this.http.delete(this.baseUrl+'/delete');
  }


}
