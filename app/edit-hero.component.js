System.register(['angular2/core', './hero.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, hero_service_1, router_1;
    var EditHeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditHeroComponent = (function () {
                function EditHeroComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                EditHeroComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._heroService.getHero(id)
                        .subscribe(function (hero) { return _this.hero = hero; }, function (error) { return _this.errorMessage = error; });
                };
                EditHeroComponent.prototype.edithero = function (hero) {
                    var _this = this;
                    this._heroService.edithero(hero, hero.id)
                        .subscribe(function (hero) { return _this.hero = hero; }, function (error) { return _this.errorMessage = error; });
                };
                EditHeroComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-hero',
                        template: "\n        <div *ngIf=\"hero\">\n            <h2>{{hero.name}} edit page</h2>\n            <div>\n                <label>Firstname: </label>\n                <input [(ngModel)]=\"hero.firstname\" placeholder=\"firstname\">\n                <label>Lastname: </label>\n                <input [(ngModel)]=\"hero.lastname\" placeholder=\"lastname\">\n                <label>Age: </label>\n                <input [(ngModel)]=\"hero.age\" placeholder=\"age\">\n                <label>Sex: </label>\n                <input [(ngModel)]=\"hero.sex\" type=\"radio\" name=\"gender\" value=\"M\"> Male<br>\n                <input [(ngModel)]=\"hero.sex\" type=\"radio\" name=\"gender\" value=\"F\"> Female<br>\n            </div>\n\n            <button (click)=\"edithero(hero)\">Save</button>\n        </div>\n        ",
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
                ], EditHeroComponent);
                return EditHeroComponent;
            }());
            exports_1("EditHeroComponent", EditHeroComponent);
        }
    }
});
//# sourceMappingURL=edit-hero.component.js.map