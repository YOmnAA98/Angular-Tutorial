import { Component, EventEmitter, Output } from '@angular/core';
import { UserData } from '../user-data';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {
  @Output() userData: EventEmitter<UserData> = new EventEmitter<UserData>();

  users: UserData[] = [{
    id: 1,
    name: "yomna",
    age: 25,
    country: "Egypt"

  },
  {
    id: 2,
    name: "mai",
    age: 25,
    country: "Egypt"

  },
  {
    id: 3,
    name: "yara",
    age: 24,
    country: "Egypt"

  },
  {
    id: 4,
    name: "nada",
    age: 20,
    country: "Egypt"

  },
  {
    id: 5,
    name: "shahd",
    age: 23,
    country: "Egypt"

  },
]

showDetails(user: UserData){
this.userData.emit(user);
}

// @Output() newID  = new EventEmitter<number>();
// @Output() newName = new EventEmitter<string>();
// @Output() newAge = new EventEmitter<number>();
// @Output() newCountry  = new EventEmitter<string>();

// addUser(id: number, name: string, age: number, country: string) {
//     this.newID.emit(id);
//     this.newName.emit(name);
//     this.newAge.emit(age);
//     this.newCountry.emit(country);
//   }
}
