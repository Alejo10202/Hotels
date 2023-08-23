import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){ }

  login(){
    localStorage.setItem('token', Math.random().toString());
    //localStorage.removeItem('token');
    this.router.navigate(['/home'])
  }

}
