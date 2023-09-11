import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  template: ``,
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNot() {
    this.displayNotification = true;
  }
}
