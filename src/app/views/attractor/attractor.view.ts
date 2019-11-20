import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from 'src/app/services/session.service';

@Component({
    selector: 'app-attractor',
    templateUrl: './attractor.view.html',
    styleUrls: ['./attractor.view.scss']
})
export class AttractorView implements OnInit {

    constructor(
        private router: Router,
        private sessionService: SessionService
    ) {}

    // Attractor broken - start application
    start() {
        this.router.navigate(['capture']);
    }

    // Clears the previous session data
    ngOnInit() {
        this.sessionService.resetSession();
    }

}
