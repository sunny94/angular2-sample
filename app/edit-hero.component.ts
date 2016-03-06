import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {RouteParams} from 'angular2/router';
import {FORM_DIRECTIVES} from "angular2/common";
import {RadioControlValueAccessor} from "./radio_value_accessor";

@Component({
    selector: 'edit-hero',
    template:`
        <div *ngIf="hero">
            <h2>{{hero.name}} edit page</h2>
            <div>
                <label>Firstname: </label>
                <input [(ngModel)]="hero.firstname" placeholder="firstname">
                <label>Lastname: </label>
                <input [(ngModel)]="hero.lastname" placeholder="lastname">
                <label>Age: </label>
                <input [(ngModel)]="hero.age" placeholder="age">
                <label>Sex: </label>
                <input [(ngModel)]="hero.sex" type="radio" name="gender" value="M"> Male<br>
                <input [(ngModel)]="hero.sex" type="radio" name="gender" value="F"> Female<br>
            </div>

            <button (click)="edithero(hero)">Save</button>
        </div>
        `,
})
export class EditHeroComponent implements OnInit{
    hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams){
    }

    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
        .subscribe(
            hero => this.hero = hero,
            error=> this.errorMessage = error
            );
    }
    errorMessage: string;

    edithero(hero: Hero){
        this._heroService.edithero(hero,hero.id)
                         .subscribe(
                            hero => this.hero = hero,
                            error => this.errorMessage = error
                         );
    }
}
