import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string;
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.title = 'Profile';
  }

  updateUser(user) {
    this.user = this.userService.updateUser(this.user.userId, user);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService.findUserById(params.userId);
    });
  }



}
