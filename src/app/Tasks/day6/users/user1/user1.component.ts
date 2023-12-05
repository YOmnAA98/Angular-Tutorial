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

  addUser(idPara: any, namePara: any, agePara: any, countryPara: any) {
    this.users.push({ id: idPara, name: namePara, age: agePara, country: countryPara });
  }

  deleteUser(para: UserData){
    const index = this.users.findIndex(e => e.id = para.id);
    this.users.splice(index, 1);
  }

  editUser(para: UserData){

  }
}
