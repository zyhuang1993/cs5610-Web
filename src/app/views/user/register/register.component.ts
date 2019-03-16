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
  user: User;
  errorFlag: boolean;
  errorMsg = 'Sorry, passwords mis-matching.';

  constructor(private router: Router, private userService: UserService) {
    this.title = 'Register';
    this.errorFlag = false;
    this.user = new User(undefined, undefined, undefined, undefined, undefined);
  }

  register(verifiedPassword: string) {
    if (!this.user.username || !this.user.password || !this.user.lastName || !this.user.firstName) {
      alert('Please enter your register information');
    } else {
      if (verifiedPassword === this.user.password) {
        this.errorFlag = false;
        const registeredUser: User = new User(undefined, this.user.username, this.user.password, this.user.firstName, this.user.lastName);
        this.userService.createUser(registeredUser).subscribe((data: User) => {
          this.user.userId = data.userId;
          this.router.navigate(['user', this.user.userId]);
        });
      } else {
        this.errorFlag = true;
      }
    }
  }

  ngOnInit() {
  }

}
