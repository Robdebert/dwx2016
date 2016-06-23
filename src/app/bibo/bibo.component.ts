import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'br-bibo',
  templateUrl: 'bibo.component.html',
  styleUrls: ['bibo.component.css']
})
export class BiboComponent implements OnInit {
    bibos: string[];

    constructor() {}

    ngOnInit() {
        this.bibos = ["Bibo 1", "Bibo 2"];
    }

}