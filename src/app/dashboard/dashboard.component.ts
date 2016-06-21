import { Component, OnInit } from '@angular/core';
import { BookComponent } from '../book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})


export class DashboardComponent implements OnInit {

  public books: Book[];
  
  constructor() {}
  
  // Wird vom FORM submit Button aufgerufen, durch das onclick-event
	  add(title, descr, rating) {
		  this.books.push(
			new Book(title.value, descr.value, rating.value)
		  );
		  
		title.value = descr.value = rating.value = "";
		return false;
	  }

	  
	  
  ngOnInit() {
	this.books = [new Book('Buch 1', 'blablabla', 5), 
				new Book('Buch 2', 'bgflindfglablabla')
	
			];
  }
  
  
  
  sort(book: Book) {
	this.books.sort((a,b) => b.rating - a.rating);  
  }

}
