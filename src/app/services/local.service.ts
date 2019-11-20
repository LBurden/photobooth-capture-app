import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LocalService {

    constructor(
        private http: HttpClient
    ) { }

    // Uses the server setup by photobooth-node-server to save images locally
    save(data: any) {
        return new Promise( (resolve, reject) => {
            this.http.post( 'http://localhost:9000/upload', data ).subscribe( (response: any) => {
                resolve(response);
            }, (error) => reject(error));
        });
    }

}
