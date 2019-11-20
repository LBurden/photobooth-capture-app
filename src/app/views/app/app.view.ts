import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { animation } from '../../animations/route.animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.view.html',
    styleUrls: ['./app.view.scss'],
    animations: [animation]
})
export class AppView implements OnInit {

    constructor(
        private router: Router
    ) {}

    // Passes route data to supply the correct animation
    prepareRoute(outlet: any) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    // Go to app route on start
    ngOnInit() {
        this.router.navigate(['/']);
    }
}
