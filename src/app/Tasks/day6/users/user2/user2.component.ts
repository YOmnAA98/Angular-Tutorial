import { Component, Input } from '@angular/core';
import { UserData } from '../user-data';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {
  @Input() user2!: UserData;
}
