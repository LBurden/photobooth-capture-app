import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SessionService {

    // Stores the user created images for the session
    private _images: any [];

    constructor() { }

    // Clears the session data
    resetSession() {
        this._images = [];
    }

    // Adds image (sent as base64) to the images array
    storeImage(value: any) {
        this._images.push(value);
    }

    // Returns all images in the session
    get images() {
        return this._images;
    }
}
