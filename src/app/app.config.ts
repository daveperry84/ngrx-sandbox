import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { userDataReducer } from './shared/states/user-data/user-data.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    provideStore(),
    provideState({ name: 'userData', reducer: userDataReducer })
  ]
};
