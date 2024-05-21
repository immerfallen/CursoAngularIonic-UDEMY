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
      'https://thumbs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      249.90,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSZyDvGG91YFGXqLY3Gt38Y6AEhtI9qKzGGaimzN3shUA11aGwmymMu7Wwv6CQ3DMQh',
      389.90,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg/800px-Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg?20181015014702',
      99.99,
      new Date('2024-01-01'),
      new Date('2024-12-31')
    ),
    
  ];

get places() {
    return [...this._places];
  }

  getPlaces(id: string): Place{
    return {...this._places.find(p=> p.id === id)} as Place;
  }

  constructor() {}
}
