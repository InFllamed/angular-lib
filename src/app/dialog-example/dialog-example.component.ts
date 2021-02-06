import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  user: any;
  userName: string;
  userSurname: string;
  userTitle: string;

    constructor(public crudservice: CrudService) { }

  ngOnInit(): void {
    this.crudservice
      .get_Alluser()
      .subscribe(data => {
      this.user = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['title'],
          surname: e.payload.doc.data()['author'],
          title: e.payload.doc.data()['title']
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  CreateRec() {
    const Rec = {};
    Rec['name'] = this.userName;
    Rec['surname'] = this.userSurname;
    Rec['title'] = this.userTitle;

    this.crudservice.create_Newuser(Rec).then( res => {

      this.userName = '';
      this.userSurname = '';
      this.userTitle = '';
    }).catch(error => {
      console.log(error);
    });

  }
}