import {Component, OnInit} from '@angular/core';
import {CrudService} from '../service/crud.service';
import { MatDialog } from '@angular/material/dialog';
import {DialogExampleComponent} from '../dialog-example/dialog-example.component';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {
  books: any;
  booksTitle: string;
  booksAuthor: string;
  booksImg: string;
  search: '';
  searchBook = true;
  constructor(public crudservice: CrudService, public dialog: MatDialog) { }


  // tslint:disable-next-line:typedef
  openDialog() {
  this.dialog.open(DialogExampleComponent);
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.crudservice
      .get_Allbooks()
      .subscribe(data => {
      this.books = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          title: e.payload.doc.data()['title'],
          author: e.payload.doc.data()['author'],
          img: e.payload.doc.data()['img'],
        };
      });
    });
  }
}
