import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manahattan Mansion',
      'In the heart of New Yourk City',
      'https://media.tatler.com/photos/6256d9edb3a3bbd05d93c198/master/w_1600,c_limit/LanierHouse_13042022_123%20E%2035th%20Street%20-%20New%20York,%20NY-2.jpg',
      249.90
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg/800px-Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg?20181015014702',
      389.90
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
