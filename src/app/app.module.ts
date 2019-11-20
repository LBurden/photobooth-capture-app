// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// App Modules
import { AppRoutingModule } from './app-routing.module';

// Views
import { AppView } from './views/app/app.view';
import { AttractorView } from './views/attractor/attractor.view';
import { CaptureView } from './views/capture/capture.view';
import { ErrorView } from './views/error/error.view';
import { ShareView } from './views/share/share.view';

// Components
import { TimeoutComponent } from './components/timeout/timeout.component';

@NgModule({
    declarations: [
        AppView,
        AttractorView,
        CaptureView,
        ErrorView,
        ShareView,
        TimeoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppView]
})
export class AppModule {}
