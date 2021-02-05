import {Component, OnInit} from '@angular/core';
import {CrudService} from '../service/crud.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  books: any;
  booksTitle: string;
  booksAuthor: string;
  booksImg: string;
  message: string;

  constructor(public crudservice: CrudService) {
  }

  ngOnInit(): void {
    this.crudservice.get_Allbooks().subscribe(data => {

      this.books = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          title: e.payload.doc.data()['title'],
          author: e.payload.doc.data()['author'],
          img: e.payload.doc.data()['img'],
        };
      });
      console.log(this.books);

    });
  }

  // tslint:disable-next-line:typedef
  CreateRecord() {
    let Record = {};
    Record['title'] = this.booksTitle;
    Record['author'] = this.booksAuthor;
    Record['img'] = this.booksImg;

    this.crudservice.create_Newbooks(Record).then(res => {

      this.booksTitle = '';
      this.booksAuthor = '';
      this.booksImg = '';
      console.log(res);
      this.message = 'Сохранено';
    }).catch(error => {
      console.log(error);
    });

  }

  // tslint:disable-next-line:typedef
  EditRecord(Record) {
    Record.isedit = true;
    Record.edittitle = Record.title;
    Record.editauthor = Record.author;
    Record.editimg = Record.img;

  }

  // tslint:disable-next-line:typedef
  Updatarecord(recorddata) {
    let record = {};
    record['title'] = recorddata.edittitle;
    record['author'] = recorddata.editauthor;
    record['img'] = recorddata.editimg;
    this.crudservice.update_books(recorddata.id, record);
    recorddata.isedit = false;
  }

  // tslint:disable-next-line:typedef
  Deletebooks(record_id) {
    this.crudservice.delete_books(record_id);
  }

}

