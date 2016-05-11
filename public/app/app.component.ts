import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {HeroFormComponent} from './hero-form/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
// 路由
@RouteConfig([{
    path: '/hero-form',
    name: 'HeroForm',
    component: HeroFormComponent,
    // useAsDefault: true
}, {
    path: '/todo',
    name: 'TODO',
    component: HeroFormComponent
}])
export class AppComponent { }
