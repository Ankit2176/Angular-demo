import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm:FormGroup=new FormGroup({

    firstName:new FormControl("",[Validators.required, Validators.minLength(5)]),
    lastName:new FormControl(""),
    userName:new FormControl("",[Validators.email]),
    city:new FormControl(""),
    state:new FormControl(),
    zipCode:new FormControl("090908"),
    isAccept:new FormControl(),
    

  })


  formValue:any;
  onSave(){
  
this.formValue = this.studentForm.value;

    }
    }
