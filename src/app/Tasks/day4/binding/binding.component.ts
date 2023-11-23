import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  // data binding => interpolation
  title = "Event Binding";
  name = ""
  // attribute binding  => 
  

  // event binding
  red = "";
  changeColor(){
    this.red  = "red";
  }  

  setName(){
    this.name = "";
  }
}
