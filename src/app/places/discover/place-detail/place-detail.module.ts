import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlaceDetailPage } from './place-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule    
  ],
  declarations: [PlaceDetailPage]
})
export class PlaceDetailPageModule {}
