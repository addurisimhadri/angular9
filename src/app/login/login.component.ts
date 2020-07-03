import { Component, OnInit } from '@angular/core';
import { AuthenticationService,User } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false


  constructor(private router: Router,private authser: AuthenticationService) { }

  ngOnInit(): void {
  }
  checkLogin() {
    (this.authser.authenticate(this.username,this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }
}
