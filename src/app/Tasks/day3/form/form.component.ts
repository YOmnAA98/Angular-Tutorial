import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // interpolation relationship between HTML & TS
  title = "Login"

  userName = "Username:";
  userNameValue = "ex: Yomna-Raafat";

  email = "Email address:";
  emailValue = "ex: yomna@gmail.com";

  password = "Password:";
  passwordValue ="ex: P@$$w0rd-123";

  age = "Age:";
  ageValue = "ex: 25";  

  check = "Check me out";
  submit = "Click Me";
  // interpolation relationship between HTML & TS
}
