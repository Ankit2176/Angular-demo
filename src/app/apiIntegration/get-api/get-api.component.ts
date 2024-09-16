import { HttpClient } from '@angular/common/http';
import { Component ,inject,  } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  
  //  http =inject(HttpClient)
   
userList:any[]=[];
customList:any[]=[];


  constructor(private http:HttpClient) {
    
this.getAllUser()
this.getAllCustomer()
  }

  getAllUser(){
    debugger
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
     debugger
        this.userList =res;

        
      })


}
getAllCustomer(){
  debugger
  this.http.get("https://projectapi.gerasim.in/api/realestate/getallcustomers").subscribe((result:any)=>{
    debugger
    this.customList =result.data
  })
  }
}
