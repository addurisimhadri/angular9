import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService,Employee } from '../employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[];
  employee:Employee; 
  constructor(private employeeserviceService:EmployeeserviceService) { }
  ngOnInit() {
    this.employeeserviceService.getEmployees()
    .subscribe(
     response =>{this.employees = response;}
    );
  }
  deleteEmployee(employee: Employee): void {
    this.employeeserviceService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };
 
}
