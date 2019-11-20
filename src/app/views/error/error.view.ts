import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.view.html',
    styleUrls: ['./error.view.scss']
})
export class ErrorView {

    constructor(
        private router: Router
    ) {}

    startAgain() {
        this.router.navigate(['']);
    }
}
