import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SettingsService } from './settings.service';

@Injectable({
    providedIn: 'root',
})
export class LocalService {

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService
    ) { }

    // Uses the server setup by photobooth-node-server to save images locally
    save(data: any) {
        return new Promise( (resolve, reject) => {
            this.http.post( `${this.settingsService.data.node}/upload`, data ).subscribe( (response: any) => {
                resolve(response);
            }, (error) => reject(error));
        });
    }

}
