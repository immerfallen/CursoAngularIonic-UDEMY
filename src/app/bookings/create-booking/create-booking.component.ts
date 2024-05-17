import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent   {
@Input() selectedPlace: Place = {} as Place;
  constructor(private modalCtrl: ModalController) { }

  onCancel(){
this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace(){
this.modalCtrl.dismiss({message: 'Placed booked!'}, 'confirmed')
  }

}
