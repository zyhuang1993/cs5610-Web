import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
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
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.title = 'profile';
  }

  updateUser() {
    if (!this.user.username || !this.user.password || !this.user.firstName || !this.user.lastName) {
      alert('Please enter your new profile information');
    }
    this.userService.updateUser(this.user.userId, this.user);
    alert('Your profile has been updated.');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.user = this.userService.findUserById(params.userId);
    });
  }



}
