import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {EditHeroComponent} from './edit-hero.component';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>Your Heroes</h1>
        <ul>
            <li *ngFor="#hero of heroes" (click)="gotoEdit(hero)">{{hero.firstname}}</li> 
        <ul>

        <button #selected (click)="selected.value = 1">Add a new hero</button>
        <div *ngIf="selected.value">    
            New Hero:
            <br>
            <label>Firstname : </label><input #fname/><br>
            <label>Lastname : </label><input #lname/><br>
            <label>Age : </label><input #heroage/><br>
            <label>Sex : </label>
            <input #herosex type="radio" name="gender" value="M"> Male<br>
            <input #herosex type="radio" name="gender" value="F"> Female<br>

            <button (click)="addHero(fname.value,lname.value,heroage.value,herosex.value); fname.value='';lname.value='';heroage.value='';herosex.value='';selected.value=''">
            Add Hero
            </button>
        </div>
        <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/hero/:id',
        name: 'EditHero',
        component: EditHeroComponent
    }
])
export class AppComponent implements OnInit{
    heroes: Hero[];
    errorMessage: string;
    constructor(
        private _heroService: HeroService,
        private _router: Router){
    }
    
    getHeroes(){
        this._heroService.getHeroes()
                         .subscribe(
                         heroes => this.heroes = <Hero[]>heroes,
                         error => this.errorMessage = <any>error);
    }
    
    addHero(firstname:string, lastname:string, age:number, sex:string){
        if(!firstname){return;}
        this._heroService.addHero(firstname,lastname,age,sex)
                         .subscribe(
                            hero => this.heroes.push(hero),
                            error => this.errorMessage = <any>error);
                         
    }

    gotoEdit(hero: Hero){
        let link = ['EditHero', {id: hero.id}];
        console.log(hero.id);
        this._router.navigate(link);
    }

    ngOnInit(){
        this.getHeroes();
    }
}
