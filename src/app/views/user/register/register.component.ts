import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string;
  username: string;
  password: string;
  lastName: string;
  firstName: string;

  errorFlag: boolean;
  errorMsg = 'Sorry, passwords mis-matching.';

  constructor(private router: Router, private userService: UserService) {
    this.title = 'Register';
    this.errorFlag = false;
  }

  register(verifiedPassword: string) {
    if (!this.username || !this.password || !this.lastName || !this.firstName) {
      alert('Please enter your register information');
    } else {
      if (verifiedPassword === this.password) {
        this.errorFlag = false;
        const registeredUser: User = new User(undefined, this.username, this.password, this.firstName, this.lastName);
        this.userService.createUser(registeredUser);
        this.router.navigate(['user', registeredUser.userId]);
      } else {
        this.errorFlag = true;
      }
    }
  }

  ngOnInit() {
  }

}
