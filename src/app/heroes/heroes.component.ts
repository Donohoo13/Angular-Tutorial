import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[]

  selectedHero: Hero;
  onSelect(hero: Hero): any {
    this.selectedHero = hero;
  }

  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes() {
  //   return this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes)
  // }

  getHeroes() {
    return this.heroService.getHeroes().toPromise()
    .then(result => this.heroes = result)
    .catch(err => console.log('error'))
  }

}
