import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/housing.service';
import { Housinglocation } from 'src/app/housinglocation'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  constructor() {
      // this.housingLocationId = Number(this.route.snapshot.params['id']);
      // this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
  
}
