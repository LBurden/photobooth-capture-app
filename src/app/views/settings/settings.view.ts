import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SettingsService } from '../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.view.html',
    styleUrls: ['./settings.view.scss']
})
export class SettingsView {

    // Stores the current settings - inherits settings service variable
    settings: any = this.settingsService.data;

    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) {}

    // Save the settings to local storage and go to viewer
    save() {
        this.settingsService.save(this.settings);
        this.router.navigate(['']);
    }

}
