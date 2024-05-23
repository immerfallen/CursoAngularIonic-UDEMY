import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manahattan Mansion',
      'In the heart of New Yourk City',
      'https://thumbs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      249.9,
      new Date('2024-01-01'),
      new Date('2024-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'A romantic place in Paris',
      'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSZyDvGG91YFGXqLY3Gt38Y6AEhtI9qKzGGaimzN3shUA11aGwmymMu7Wwv6CQ3DMQh',
      389.9,
      new Date('2024-01-01'),
      new Date('2024-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg/800px-Foggy_Day_Neuschwanstein_Castle_%28229936735%29.jpeg?20181015014702',
      99.99,
      new Date('2024-01-01'),
      new Date('2024-12-31'),
      'abc'
    ),
  ]);

  get places() {
    return this._places.asObservable();
  }

  getPlaces(id: string): Observable<Place> {
    return this.places.pipe(
      take(1),
      map((places) => {
        return { ...(places.find((p) => p, id == id) as Place) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSZyDvGG91YFGXqLY3Gt38Y6AEhtI9qKzGGaimzN3shUA11aGwmymMu7Wwv6CQ3DMQh',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  constructor(private authService: AuthService) {}

  editOffer(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        const updatePlaceIndex = places.findIndex(
          (place) => place.id === placeId
        );
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatePlaceIndex];
        updatedPlaces[updatePlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
