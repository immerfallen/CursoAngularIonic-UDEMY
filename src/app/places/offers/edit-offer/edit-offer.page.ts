import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
place: Place = {} as Place;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtlr: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('placeId')) {
        this.navCtlr.navigateBack('/place/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlaces(paramMap.get('placeId') as string);
    });
  }
}
