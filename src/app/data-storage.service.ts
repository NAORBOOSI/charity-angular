import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  createDeliverResponse:BehaviorSubject<String> = new BehaviorSubject<String>("");
  createGettingResponse:BehaviorSubject<String> = new BehaviorSubject<String>("");
  createCompanyResponse:BehaviorSubject<String> = new BehaviorSubject<String>("");


  public setCreateDeliverResponse (res:string):void{
    this.createDeliverResponse.next(res);
  }
public getCreateDeliverResponse():BehaviorSubject<String>{
  return this.createDeliverResponse;
}

public setCreateGettingResponse (res:string):void{
  this.createGettingResponse.next(res);
}

public getCreateGettingResponse():BehaviorSubject<String>{
  return this.createGettingResponse;
}


public setCreateCompanyResponse (res:string):void{
  this.createCompanyResponse.next(res);
}

public getCreateCompanyResponse():BehaviorSubject<String>{
  return this.createCompanyResponse;
}

  constructor() { }
}
