import { bootstrap } from '@angular/platform-browser-dynamic'; // liegt in node_modules/@angular.....
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);

