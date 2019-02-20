import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  title: string;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg: 'Invalid username or password! Please re-enter!';

  constructor() {}

  ngOnInit() {
    this.title = 'Login';
    this.errorFlag = false;
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
  }

  buttonClicked(event: any) {
    console.log(event);
  }
}
