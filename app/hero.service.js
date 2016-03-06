System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this._herosUrl = "http://127.0.0.1:8000/user.json";
                    this._heroUrl = "http://127.0.0.1:8000/user/";
                }
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this._herosUrl)
                        .map(function (res) { return (res.json()); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                HeroService.prototype.getHero = function (id) {
                    return this.http.get("http://127.0.0.1:8000/user/" + id + ".json")
                        .map(function (res) { return (res.json()); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                HeroService.prototype.addHero = function (firstname, lastname, age, sex) {
                    var body = JSON.stringify({ firstname: firstname, lastname: lastname, age: age, sex: sex });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._herosUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                HeroService.prototype.edithero = function (hero, id) {
                    var body = JSON.stringify(hero);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(this._heroUrl + id + ".json", body, options)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                HeroService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server Error');
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map