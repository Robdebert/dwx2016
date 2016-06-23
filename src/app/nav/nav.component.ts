import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'br-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
    menuitems: any[];
    
    constructor() {}

    ngOnInit() {
        this.menuitems = [
            {title: "Start", href: "start", active: true},
            {title: "Bücher", href: "books", active: false},
            {title: "Bibliotheken", href: "bibos", active: false}
         ];
    }

}
