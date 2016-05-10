import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {Hero, HeroService} from '../hero/index';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form/hero-form.component.html',
    styleUrls: ['app/hero-form/hero-form.component.css'],
    providers: [HTTP_PROVIDERS, HeroService]
})
export class HeroFormComponent implements OnInit {
    // 新建一个 Hero 实例
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    heroes: Hero[] = [];
    errorMessage: string;

    submitted = false;

    active = true;

    constructor(private router: Router, private heroService: HeroService) { }

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true);
    }

    onSubmit() {
        this.submitted = true;
    }

    ngOnInit() {
        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error);
    }

    addHero(name: string) {
        if (!name) { return; }
        this.heroService.addHero(name).subscribe(
            hero  => this.heroes.push(hero),
            error => this.errorMessage = <any>error);
    }
}
