import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})


export class BookComponent implements OnInit {
	
	@Input() book: Book; // nimmt Daten von aussen an, öffentliche Api. Muss in Zeile 1 mit importiert werden
	@Output() rated: EventEmitter<Book>; // Siehe wieder in Zeile 1, da wird "Output" importiert.
	
  constructor() {
	  this.rated = new EventEmitter(); // erzeugt ein neues Event. Siehe für den Aufruf: dashboard.component.html: "(rated)="sort($event)..."
  }
  
  rateUp() {
	  this.book.rateUp();
	  this.rated.emit(this.book);
  }
  
  rateDown() {
	  this.book.rateDown();
	  this.rated.emit(this.book);
  }


  ngOnInit() {
  }
  
}
