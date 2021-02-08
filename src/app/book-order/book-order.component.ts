import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.scss']
})
export class BookOrderComponent implements OnInit {
  userOrder;
  userName: string;
  userSurname: string;
  userTitle: string;

  constructor(public crudservice: CrudService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.crudservice
      .getBookOrders()
      .subscribe(data => {
        this.userOrder = data.map(e => {
          return {
            id: e.payload.doc.id,
            Name: e.payload.doc.data()['name'],
            Surname: e.payload.doc.data()['surname'],
            Title: e.payload.doc.data()['title']
          };
        });
        console.log('User', this.userOrder);
      });
  }

  Deleteorder(record_id) {
    this.crudservice.delete_order(record_id);
  }
}
