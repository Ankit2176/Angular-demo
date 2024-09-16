import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {


  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  deptList: any[] = []

  http = inject(HttpClient);


  constructor(private deptserv: DepartmentService) {

  }

  ngOnInit(): void {
    this.getDepartment()
  }

  // onSave() {

  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {

  //     if (res.result = true) {
  //       alert('departmet Created Succesfully')
  //       this.deptObj = ""
  //     }
  //     else {
  //       alert('departament not created ')
  //     }

  //   })
  // }

  onSave() {
    debugger;
    this.deptserv.saveNewData(this.deptObj).subscribe((res: any) => {

      if (res.result = true) {
        alert('departmet Created Succesfully')
        this.deptObj = ""
        
      }
      else {
        alert('departament not created ')
      }

    })
  }


  // getDepartment() {

  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/getparentdepartment").subscribe((res: any) => {

  //     this.deptList = res.data
  //   })
  // }


  getDepartment() {
    debugger;
    this.deptserv.getAllDept().subscribe((res: any) => {
      this.deptList = res.data
    })
  }

  onEdit(data: any) {
    this.deptObj = data
  }


  onUpdate() {

    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      debugger
      if (res.result = true) {
        alert('departmet updated Succesfully')

      }
      else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {
    debugger;
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteDepartmentByDepartmentId?DepartmentId=" + id).subscribe((res: any) => {
      debugger
      if (res.result = true) {
        alert('departmet deleted Succesfully')

      }
      else {
        alert(res.message)
      }
    })
  }

}
