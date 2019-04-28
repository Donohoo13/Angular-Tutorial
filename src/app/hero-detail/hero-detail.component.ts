import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    public messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero),
    this.messageService.add(`${this.hero.name} was selected`);
  }

  goBack() {
    if (this.route.pathFromRoot)
    this.router.navigate(['/dashboard'])
    // this.location.back();
  }

}
