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
export class ApiResponse {

  status: number;
  message: number;
  result: any;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  //response:any;
  //public jwtResponse : JwtResponse;
  constructor(private httpClient:HttpClient) { }
    
  getEmployees(request): Observable<Employee[]>
  {     
    //console.log("token "+sessionStorage.getItem('token')); 
    //const headers = new HttpHeaders({ Authorization: ""+sessionStorage.getItem("token") }); 
    //console.log("test call "+headers.get("Authorization")); 
    const params = request;
    return this.httpClient.get<Employee[]>("http://dev.wicore.in:8080/cmsapi/api/employee/getAll",{params});
  }
  deleteEmployee(employee) : Observable<ApiResponse>{
    return this.httpClient.delete<ApiResponse>("http://dev.wicore.in:8080/cmsapi/api/employee/delete" + "/"+ employee.id);
  }
  getEmployeeById(employeeId) :Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>("http://dev.wicore.in:8080/cmsapi/api/employee/get" + "/"+ employeeId);
  }
  createEmployee(employee) :Observable<ApiResponse>{ 
    return this.httpClient.post<ApiResponse>("http://dev.wicore.in:8080/cmsapi/api/employee/add", employee);
  }
  public updateEmployee(employee) :Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>("http://dev.wicore.in:8080/cmsapi/api/employee/update"+ "/"+ employee.id, employee);
  }
}
