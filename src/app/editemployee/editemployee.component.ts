import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService,Employee } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee: Employee = new Employee("","","","","","");
  constructor(private router: Router,private employeeserviceService:EmployeeserviceService) { }

  ngOnInit(): void {
  }
  updateEmployee(): void {
    this.employeeserviceService.updateEmployee(this.employee)
        .subscribe( data => {
          this.router.navigate([''])
          alert("Employee updated successfully.");
        });
  };

}
