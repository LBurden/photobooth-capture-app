import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-timeout',
    template: '',
    styleUrls: []
})
export class TimeoutComponent implements OnInit, OnDestroy {

    // Store the timer before reset
    timer: any;

    // Listens for document clicks
    @HostListener('document:click')
    clicked() {
        this.startTimer();
    }

    constructor(
        private router: Router
    ) {}

    // Starts/Restarts the timer - on 2 minutes resets the app
    startTimer() {
        clearTimeout(this.timer);
        this.timer = setTimeout( () => {
            this.reset();
        }, 120000 );
    }

    // Resets back to the attractor page
    reset() {
        this.router.navigate(['']);
    }

    // Starts timer
    ngOnInit() {
        this.startTimer();
    }

    // Clear timer reference
    ngOnDestroy() {
        clearTimeout(this.timer);
    }

}
