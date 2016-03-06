import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Http,HTTP_PROVIDERS,Response,Headers,RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';

@Injectable()
export class HeroService{

    constructor(private http: Http){}

    private _herosUrl = "http://127.0.0.1:8000/user.json";
    private _heroUrl = "http://127.0.0.1:8000/user/";

    getHeroes(){
        return this.http.get(this._herosUrl)
                        .map(res => <Hero[]>(res.json()))
                        .do(data => console.log(data))
                        .catch(this.handleError);
    }

    getHero(id: number){
        return this.http.get("http://127.0.0.1:8000/user/" + id + ".json")
                        .map(res => <Hero>(res.json()))
                        .do(data => console.log(data))
                        .catch(this.handleError);
    }

    addHero(firstname: string,lastname: string,age: number,sex: string): Observable<Hero> {         
        let body = JSON.stringify({firstname,lastname,age,sex});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.post(this._herosUrl, body, options)
                        .map(res => <Hero>res.json())
                        .do(data => console.log(data))
                        .catch(this.handleError)
    }    
 

    edithero(hero: Hero,id: number){
        let body = JSON.stringify(hero);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(this._heroUrl + id + ".json",body, options)
                        .map(res => <Hero>res.json())
                        .do(data => console.log(data))
                        .catch(this.handleError)
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
