import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService,Employee } from '../employeeservice.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[];
  employee:Employee; 
  constructor(private router: Router,private employeeserviceService:EmployeeserviceService) { }
  ngOnInit() {
    this.employeeserviceService.getEmployees()
    .subscribe(
     response =>{this.employees = response;}
    );
  }
  deleteEmployee(employee: Employee): void {
    this.employeeserviceService.deleteEmployee(employee)
      .subscribe( data => { 
        alert(data.message); 
        this.employees = this.employees.filter(e => e !== employee);
      })
  }; 
  editEmployee(employee: Employee): void {
    window.localStorage.removeItem("editEmpId");
    window.localStorage.setItem("editEmpId", employee.id.toString());
    this.router.navigate(['editemployee']);
  };
  addEmployee(): void {
    this.router.navigate(['addemployee']);
  };
}
