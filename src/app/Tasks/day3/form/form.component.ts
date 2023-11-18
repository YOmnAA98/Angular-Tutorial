import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  userName = "Username:";
  userNameValue = "Yomna-Raafat";

  email = "Email address:";
  emailValue = "ex: yomna@gmail.com";

  password = "Password:";
  passwordValue ="ex: P@$$w0rd-123";

  age = "Age:";
  ageValue = "25";  

  check = "Check me out";
  submit = "Click Me";
  
}
