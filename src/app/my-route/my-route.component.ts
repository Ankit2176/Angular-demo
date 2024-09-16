
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-route',
  templateUrl: './my-route.component.html',
  styleUrl: './my-route.component.css',

})
export class MyRouteComponent{


  /**
   *
   */

  constructor(private router : Router) {
    
    
  }
  
  navigateToAttr(){
    this.router.navigateByUrl("myclg")
  }
}
