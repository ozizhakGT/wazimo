import {Component, Input} from '@angular/core';
import User from "../user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  showIp = false;
  @Input() user: User;

  toggleIpBtutton() {
    this.showIp = !this.showIp
  }
}
