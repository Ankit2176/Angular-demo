import { Component, Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

@Input() btnClass:string=""

@Input() btnText:string=""


@Output() onBtnClick =new EventEmitter<any>();

OnClick(){
  debugger;
this.onBtnClick.emit()
}

}
