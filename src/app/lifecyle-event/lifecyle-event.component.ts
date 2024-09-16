import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyle-event',
  templateUrl: './lifecyle-event.component.html',
  styleUrl: './lifecyle-event.component.css'
})
export class LifecyleEventComponent implements OnInit, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked, OnDestroy {

  firstName: string;
  constructor() {
    debugger;
    console.log("Constructor")
    this.firstName = "";

  }
  ngOnInit(): void {
    console.log("NG ON INIT")

  }

  

  ngDoCheck(): void {
    console.log(" NG DO CHECK")


  }
  ngAfterContentInit(): void {
    console.log("NG AFTER CONTENT INIT")

  }
  ngAfterViewChecked(): void {
    console.log("NG AFTER VIEW CHECKED")

  }
  ngAfterViewInit(): void {
    console.log("NG AFTER VIEW INIT")

  }
  ngAfterContentChecked(): void {
    console.log("NG AFTER CONTENT CHECKED")

  }
  ngOnDestroy(): void {
    console.log("NG ON DESTROY")

  }
}
