import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';

import { LocalService } from '../../services/local.service';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-share',
    templateUrl: './share.view.html',
    styleUrls: ['./share.view.scss']
})
export class ShareView implements OnInit, OnDestroy {

    // The images captured in the photobooth
    images = this.sessionService.images;
    // The souvenir card
    souvenir: any;
    // Timer reference: shows the souvenir before giving form options
    timer: any;

    constructor(
        private localService: LocalService,
        private router: Router,
        private sessionService: SessionService
    ) {}

    // Resets the session and goes back to capture
    tryAgain() {
        this.router.navigate(['']);
    }

    // Saves the 4 original images and the souvenir to a local folder
    save() {
        const requests = [];
        this.images.forEach( (image: any, index: number) => {
            requests.push( this.localService.save({'image': image, 'file_type': `original_${index}`}) );
        });
        requests.push(this.localService.save({'image': this.souvenir, 'file_type': 'souvenir'}));

        Promise.all(requests).then( () => {
            this.router.navigate(['']);
        }, (err) => {
            console.log('error', err);
            this.router.navigate(['error']);
        } );
    }

    // Show souvenir for 3.5s then change to form
    ngOnInit() {
        this.timer = setTimeout( () => {
            html2canvas(document.querySelector('.card')).then( (canvas: any) => {
                this.souvenir = canvas.toDataURL('image/png');
            });
        }, 3500);
    }

    // On component destroy removes references and turns off streams
    ngOnDestroy() {
        clearTimeout(this.timer);
    }

}
