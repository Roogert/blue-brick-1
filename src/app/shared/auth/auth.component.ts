import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

onSwitchAuthMode() {
  this.isLoginMode = !this.isLoginMode;
}

onAuthFormSubmit(formObj: NgForm) {
  // Validation check
  if (!formObj.valid) return;

  // Destructure the form input values
      const { email, password } = formObj.value

  // Conditional to see what mode we are in
      if (this.isLoginMode) {
        // Sign In Logic
      } else {
        // Sign Up Logic
        this.authService.signUp(email, password).subscribe(
          {
            next(res) {
              console.log('res: ', res);
            },
            error(msg) {
              console.log('Error: ', msg);
            }
          }
        );
      }

      // Observable logic with error handling

  // Reset the form
      formObj.reset();
  }

}
