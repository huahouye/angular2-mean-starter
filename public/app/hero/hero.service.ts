import {Injectable} from '@angular/core';
// http 模块选哦同时引入下面两个模块
import {Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Hero} from './index';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    // 获取数据
    getHeroes(): Observable<Hero[]> {
        return this.http.get('app/data/heroes.json')
            .map(this.extractData)
            .catch(this.handleError);
    }
    // 提交数据
    addHero(name: string): Observable<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('app/data/heroes.json', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        console.log(body.data); // {..., "data": [{...}, ...] ,}
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
