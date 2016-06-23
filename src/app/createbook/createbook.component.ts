import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-createbook',
  templateUrl: 'createbook.component.html',
  styleUrls: ['createbook.component.css']
})
export class CreatebookComponent implements OnInit {
    
    @Output() bookCreated: EventEmitter<Book>; // Siehe wieder in Zeile 1, da wird "Output" importiert.
    
    constructor() {
        this.bookCreated = new EventEmitter(); // erzeugt ein neues Event. Siehe für den Aufruf: dashboard.component.html: "(rated)="sort($event)..."
    }

    ngOnInit() {
    }
    
    
  add(title, descr, rating) {
    var book = new Book(title.value, descr.value, rating.value);
    // console.log(book);
	  this.bookCreated.emit(book);

		title.value = descr.value = rating.value = "";
		  
  }


}
