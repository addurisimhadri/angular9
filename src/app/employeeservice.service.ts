import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Employee{
  constructor(
    public id:string,
    public ename:string,
    public designation:string,
    public salary:string,
    public add:String,
    public email:String,    
  ) {}
   
}
export class JwtResponse1{
  constructor(
    public token:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  //public jwtResponse : JwtResponse;
  constructor(private httpClient:HttpClient) { }
    
  getEmployees(): Observable<Employee[]>
  { 
    
    console.log("token "+sessionStorage.getItem('token')); 
    const headers = new HttpHeaders({ Authorization: ""+sessionStorage.getItem("token") }); 
    console.log("test call "+headers.get("Authorization")); 
    return this.httpClient.get<Employee[]>("http://dev.wicore.in:8080/cmsapi/api/employee/getAll", {headers});
  }
  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://dev.wicore.in:8080/cmsapi/api/employee/get" + "/"+ employee.id);
  }
  public createEmployee(employee) { 
    return this.httpClient.post<Employee>("http://dev.wicore.in:8080/cmsapi/api/employee/add", employee);
  }
  public updateEmployee(employee) {   
    return this.httpClient.post<Employee>("http://dev.wicore.in:8080/cmsapi/api/employee/update"+ "/"+ employee.id, employee);
  }
}
