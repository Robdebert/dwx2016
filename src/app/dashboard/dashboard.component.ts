import { Component, OnInit } from '@angular/core';
import { CreatebookComponent } from '../createbook';
import { BookComponent } from '../book';
import { Book } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreatebookComponent]
})

// hier könnte auch @View({ template:}) stehen.. kann aber scheinbar auch im @Component gesetzt werden.


export class DashboardComponent implements OnInit {

  public books: Book[];
  
  constructor() {}
  
  // Wird vom FORM submit Button aufgerufen, durch das onclick-event
	  add(book: Book) {
      // console.log(book);
		  this.books.push(
			 new Book(book.title, book.descr, book.rating)
		  );
		  this.sort(book);
      return false;
	  }

	  
	  
  ngOnInit() {
	this.books = [new Book('Buch 1', 'blablabla', 5), 
				  new Book('Buch 2', 'bgflindfglablabla')
			];
  }
  
  
  remove(book: Book) {
      var i = this.books.indexOf(book);
      this.books.splice(i, 1);
  }
  
  sort(book: Book) {
	  this.books.sort((a,b) => b.rating - a.rating);  
	// So ginge es auch: this.books.sort(function(current, next) { next.rating - current.rating });
  }

}
