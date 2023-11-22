import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public invalidInput: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      Validators.required
    ]),
    password: new FormControl('', Validators.required)
  })

  public validatedInputs = (): boolean => {
    return this.loginForm.invalid;
  }
  
  constructor(private router: Router){ }

  login(){
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['/user/home'])
  }

}
