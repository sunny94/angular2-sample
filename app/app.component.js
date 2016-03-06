System.register(['angular2/core', './hero.service', 'angular2/http', 'angular2/router', './edit-hero.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, http_1, router_1, edit_hero_component_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (edit_hero_component_1_1) {
                edit_hero_component_1 = edit_hero_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                }
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.addHero = function (firstname, lastname, age, sex) {
                    var _this = this;
                    if (!firstname) {
                        return;
                    }
                    this._heroService.addHero(firstname, lastname, age, sex)
                        .subscribe(function (hero) { return _this.heroes.push(hero); }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent.prototype.gotoEdit = function (hero) {
                    var link = ['EditHero', { id: hero.id }];
                    console.log(hero.id);
                    this._router.navigate(link);
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Your Heroes</h1>\n        <ul>\n            <li *ngFor=\"#hero of heroes\" (click)=\"gotoEdit(hero)\">{{hero.firstname}}</li> \n        <ul>\n\n        <button #selected (click)=\"selected.value = 1\">Add a new hero</button>\n        <div *ngIf=\"selected.value\">    \n            New Hero:\n            <br>\n            <label>Firstname : </label><input #fname/><br>\n            <label>Lastname : </label><input #lname/><br>\n            <label>Age : </label><input #heroage/><br>\n            <label>Sex : </label>\n            <input #herosex type=\"radio\" name=\"gender\" value=\"M\"> Male<br>\n            <input #herosex type=\"radio\" name=\"gender\" value=\"F\"> Female<br>\n\n            <button (click)=\"addHero(fname.value,lname.value,heroage.value,herosex.value); fname.value='';lname.value='';heroage.value='';herosex.value='';selected.value=''\">\n            Add Hero\n            </button>\n        </div>\n        <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            hero_service_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/hero/:id',
                            name: 'EditHero',
                            component: edit_hero_component_1.EditHeroComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_2.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map