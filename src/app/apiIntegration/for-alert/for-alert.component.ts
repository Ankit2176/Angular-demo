import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-for-alert',
  templateUrl: './for-alert.component.html',
  styleUrl: './for-alert.component.css'
})
export class ForAlertComponent implements OnChanges {


  @Input() message: string = "";

  @Input() alertType: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on changes")
  }

}
