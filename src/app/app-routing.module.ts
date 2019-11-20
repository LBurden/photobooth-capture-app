// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Views
import { AttractorView } from './views/attractor/attractor.view';
import { CaptureView } from './views/capture/capture.view';
import { ErrorView } from './views/error/error.view';
import { ShareView } from './views/share/share.view';

const routes: Routes = [
    {
        'path': '',
        'component': AttractorView,
        'data': {
            'animation': 'Attractor'
        }
    },
    {
        'path': 'capture',
        'component': CaptureView,
        'data': {
            'animation': 'Capture'
        }
    },
    {
        'path': 'error',
        'component': ErrorView,
        'data': {
            'animation': 'Error'
        }
    },
    {
        'path': 'share',
        'component': ShareView,
        'data': {
            'animation': 'Share'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
