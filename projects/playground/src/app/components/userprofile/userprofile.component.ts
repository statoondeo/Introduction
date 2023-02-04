import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserProfileComponent {
  @ViewChild('newFirstNameInput')
  newFirstName?: ElementRef<HTMLInputElement>;
  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input('job')
  job = '';
  @Input('hired')
  isHired = false;
  changeFirstName() {
    if (!this.newFirstName) return;
    this.firstName = this.newFirstName.nativeElement.value;
  }
  hire() {
    this.isHired = true;
  }
}
