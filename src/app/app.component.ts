import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard';
import { BiboComponent } from './bibo';
import { NavComponent } from './nav';

@Component({
  moduleId: module.id,
  selector: 'app-root', // <app-root>...</app-root>
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DashboardComponent, BiboComponent, NavComponent]
})
export class AppComponent {
  title: string = 'App.Component.ts Title-Property';
}
