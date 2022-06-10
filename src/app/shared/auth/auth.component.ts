import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg: string = null;
  authObsrv: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    // Validation check
    if (!formObj.valid) return;

    // Destructure the form input values
    const { email, password } = formObj.value;

    // Conditional to see what mode we are in
    if (this.isLoginMode) {
      // Sign In Logic
      this.authObsrv = this.authService.signIn(email, password);
    } else {
      // Sign Up Logic
      this.authObsrv = this.authService.signUp(email, password);
    }

    // Observable logic with error handling
    this.authObsrv.subscribe(
      //used object to fix subscription deprication issue
      {
        next(res) {
          console.log('Auth Response Success:', res);
          if (this.errMsg) this.errMsg = null;
          // this.router.navigate(['landing']);
        },
        error(err) {
          console.log('Auth Response Error: ', err);
          this.errMsg = err.message;
        },
      }
    );
    // Reset the form
    formObj.reset();


  }
}
