import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Layoutroutes } from './app/app.routes';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(Layoutroutes),
        importProvidersFrom(BrowserModule, BrowserAnimationsModule),
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
}).catch((err) => console.error(err));
