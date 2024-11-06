import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Layoutroutes } from './app.routes';
import {
    HttpClientModule,
    provideHttpClient,
    withInterceptors,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PrimeNGConfig } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tokenInterceptor } from './services/token.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            HttpClientModule,
            PrimeNGConfig,
            BrowserAnimationsModule
        ),

        provideRouter(Layoutroutes),
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClient(withInterceptors([tokenInterceptor])),
    ],
};
