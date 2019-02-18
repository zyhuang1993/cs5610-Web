import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  errorFlag: boolean;
  errorMsg = 'Sorry, passwords mis-matching';

  constructor() { }

  register(verifiedPassword: string) {
    if (verifiedPassword === this.user.password) {
      this.errorFlag = false;
    } else {
      this.errorFlag = true;
    }
  }
  ngOnInit() {
  }

}
