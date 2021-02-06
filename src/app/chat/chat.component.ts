import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title = 'Чат';
  chatValue = '';
  chat: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.chat = db.list('chat').valueChanges();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.db.list('chat').push({content: this.chatValue});
    this.chatValue = '';
  }

}
