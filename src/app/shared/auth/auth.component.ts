import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode = true;

  constructor() { }

  ngOnInit(): void {
  }

onSwitchAuthMode() {
  this.isLoginMode = !this.isLoginMode;
}

onAuthFormSubmit(formObj: NgForm) {
  console.log('Form Values:', formObj.value);
  formObj.reset();
}

}
