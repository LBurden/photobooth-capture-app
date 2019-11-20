import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-capture',
    templateUrl: './capture.view.html',
    styleUrls: ['./capture.view.scss']
})
export class CaptureView implements OnInit, OnDestroy {

    // Count Before Picture
    count: number;
    // Turns the flash on and off
    flash: boolean;
    // Stores the timer of the flash
    flashTimer: any;
    // List of images
    images: any = [];
    // Images to capture
    imagesToCapture = 4;
    // Stores the stream of a webcam feed so it can be switched off
    stream: any;
    // Interval Timer
    timer: any;

    // Reference to the webcam element
    @ViewChild('webcam') webcam: ElementRef;

    constructor (
        private router: Router,
        private sessionService: SessionService
    ) {}

    // Finish and go to share page
    finish() {
        this.router.navigate(['share']);
    }

    // Capture the current webcam feed
    captureAndStore() {
        // Create a canvas to capture the image
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = this.webcam.nativeElement.videoWidth;
        canvas.height = this.webcam.nativeElement.videoHeight;

        // Flip Canvas
        context.translate(canvas.width, 0);
        context.scale(-1, 1);

        // Draw the webcam to the canvas
        context.drawImage(this.webcam.nativeElement, 0, 0, this.webcam.nativeElement.videoWidth, this.webcam.nativeElement.videoHeight);

        // Add the image to the session
        const image = canvas.toDataURL('image/png');
        this.images.push(image);
        this.sessionService.storeImage(image);
    }

    // Turn the flash on and off
    showFlash() {
        this.flash = true;
        this.flashTimer = setTimeout( () => {
            this.flash = false;
        }, 250);
    }

    // Takes the photo - then either takes another or finishes the capture process
    takePhoto() {
        this.showFlash();
        this.captureAndStore();

        this.imagesToCapture--;
        if (this.imagesToCapture === 0) {
            this.finish();
        } else {
            this.startCountdown();
        }
    }

    // Capture the 3 images
    startCountdown() {
        this.count = 3;
        // Remove one off the count each second
        this.timer = setInterval( () => {
            this.count--;
            // if the count is zero
            if (this.count === 0) {
                clearInterval(this.timer);
                this.takePhoto();
            }
        }, 1000);
    }

    // Gets a webcam feed and applies it to the webcam HTML video element
    getWebcam() {
        // On stream success
        const onStreamSuccess = (stream) => {
            this.webcam.nativeElement.srcObject = stream;
            this.stream = stream;
        };

        // On stream error
        const onStreamError = (err) => {
            console.error('Error Receiving Webcam Feed:', err);
        };

        // Gets the webcam feed
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({video: { width: { min: 1280, ideal: 1920 }, height: { min: 720, ideal: 1080 }}})
                .then(onStreamSuccess)
                .catch(onStreamError);
        }
    }

    // On bootup get the feed
    ngOnInit() {
        this.getWebcam();
    }

    // On component destroy removes references and turns off streams
    ngOnDestroy() {
        if (this.stream) {
            const track = this.stream.getTracks()[0];
            track.stop();
        }
        clearInterval(this.timer);
        clearInterval(this.flashTimer);
    }
}
