import { Component } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'user-profile',
  template: '<h1>{{ userName }}</h1>',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userName: string;

  constructor(private userService: UserProfileService) {
    this.userName = this.userService.getUserName();
  }
}