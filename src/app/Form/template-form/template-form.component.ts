import { Component } from '@angular/core';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCopd: '',
    isAcceptTerms: false,

  }

  formValue: any;
  onSubmit() {
    debugger;
    this.formValue = this.studentObj;

  }

  onReset() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCopd: '',
      isAcceptTerms: false,
    }
  }
}                                                                                                                                       