import { Component, OnInit } from '@angular/core';
import { Login } from '../../../models/account/auth/login-model';
import { FormBuilder,FormControl,FormGroup ,Validators, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from '../../../service/account/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']

})

export class LoginPage{

  public model: Login = new Login();
  public loginForm! : FormGroup;

  constructor(private formBuilder: FormBuilder,private authService : AuthService, private router: Router) {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('',
      [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',
      [
        Validators.required,
      ])
    });
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.model.email = this.email?.value;
    this.model.password = this.password?.value;
    console.log(this.model);
    this.authService.login(this.model)
      .subscribe((results:any) => console.log(results));
    this.router.navigate(['/dashboard'])

  }
}
