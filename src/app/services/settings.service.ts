import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {

    // Stores the settings data
    _data: any = localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')) : {};

    constructor() { }

    // Sets the data variable
    set data(value) {
        this._data = value;
    }

    // Gets the data variable
    get data() {
        return this._data;
    }

    // Saves the data to Kiosk config
    save(settings: any) {
        localStorage.setItem('settings', JSON.stringify(settings));
    }
}
