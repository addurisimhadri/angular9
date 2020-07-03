import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService,Employee } from '../employeeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee("","","","","","");
  constructor(private router: Router,private employeeserviceService:EmployeeserviceService) { }

  ngOnInit(): void {
  }
  createEmployee(): void {
    this.employeeserviceService.createEmployee(this.employee)
        .subscribe( data => {
          this.router.navigate([''])
          alert("Employee created successfully.");
        });
  };
}
