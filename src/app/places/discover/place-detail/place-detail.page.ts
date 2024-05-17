import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place: Place = {} as Place

  constructor(private navCtlr: NavController, private route: ActivatedRoute, private placesService: PlacesService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('placeId')) {
        this.navCtlr.navigateBack('/place/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlaces(paramMap.get('placeId') as string);
    });
  }

  
onBookPlace(){
// this.router.navigateByUrl('/places/tabs/discover')
this.navCtlr.navigateBack('/places/tabs/discover');
}
}
