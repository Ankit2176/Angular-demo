import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

deptApiUrl : string = "https://projectapi.gerasim.in/api/Complaint/"
  //for get data
  getAllDept(){
    return this.http.get(this.deptApiUrl+"getparentdepartment");

  }


  //for post data

  saveNewData(obj:any){
    return  this.http.post(this.deptApiUrl+  "AddNewDepartment",obj);
  }
}
