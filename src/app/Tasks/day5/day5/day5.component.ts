import { Component } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component {

  infoValue = "";

  getPrint(value:any){
    console.log(value);
  }
  
}
