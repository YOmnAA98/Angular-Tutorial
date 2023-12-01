import { Component } from '@angular/core';
import { UserData } from './user-data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user!:UserData;
  getData(data: UserData){
    this.user = data;
  }

}
