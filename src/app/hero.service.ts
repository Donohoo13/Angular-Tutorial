import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

    // getHeroes(): Hero[] {
  //   return Heroes;
  // }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }

  getHero(id: number): Observable<Hero> {
    return of(Heroes.find(hero => hero.id === id));
  }
}
