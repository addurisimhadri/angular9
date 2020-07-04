import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';

const routes: Routes = [
  { path:'', component: EmployeeComponent,canActivate:[AuthGuardService]},
  { path:'login', component: LoginComponent }, 
  { path:'addemployee', component: AddEmployeeComponent,canActivate:[AuthGuardService]},
  { path:'editemployee', component: EditemployeeComponent,canActivate:[AuthGuardService]},
  { path:'logout', component: LogoutComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
