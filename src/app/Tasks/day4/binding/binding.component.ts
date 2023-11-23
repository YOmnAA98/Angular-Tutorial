import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {  
  
  title = "Event Binding";  

  red = "";
  changeColor(){
    this.red  = "red";
  }  

  name = ""
  deleteName(){
    this.name = "";
  }
}
