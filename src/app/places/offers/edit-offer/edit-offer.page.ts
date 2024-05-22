import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
place: Place = {} as Place;
form: FormGroup = {} as FormGroup;
private placeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtlr: NavController
  ) {}

  ngOnDestroy(){
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('placeId')) {
        this.navCtlr.navigateBack('/place/tabs/offers');
        return;
      }
      this.placeSub = this.placesService.getPlaces(paramMap.get('placeId') as string).subscribe(place=> {
        this.place = place
        this.form = new FormGroup({
          title: new FormControl(this.place.title, {
            updateOn: 'blur',
            validators: [Validators.required],
          }),
          description: new FormControl(this.place.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)],
          }),
        });
       });
      
    });
  }

  onEditOffer(){
    if(!this.form.valid){
      return;
    }
console.log(this.form);
  }
}
