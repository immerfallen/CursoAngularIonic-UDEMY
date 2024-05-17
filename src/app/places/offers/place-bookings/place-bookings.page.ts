import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-bookings',
  templateUrl: './place-bookings.page.html',
  styleUrls: ['./place-bookings.page.scss'],
})
export class PlaceBookingsPage implements OnInit {
  place: Place = {} as Place;
  constructor(private route: ActivatedRoute, private navCtlr: NavController, private placesService: PlacesService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtlr.navigateBack('/place/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlaces(paramMap.get('placeId') as string);
    });
  }
}
