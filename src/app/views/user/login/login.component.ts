import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

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
  errorMsg = 'Invalid username or password! Please re-enter!';

  constructor(private userService: UserService, private router: Router) {
    this.title = 'login';
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    if (this.username && this.password) {
      this.userService.findUserByCredentials(this.username, this.password).subscribe(
        (data: User) => {
          const user: User = data;
          if (user) {
            this.router.navigate(['user', user.userId]);
          } else {
            this.errorFlag = true;
          }
        });
    }
  }
}
