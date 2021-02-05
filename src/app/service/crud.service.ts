import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  create_Newuser(Record)
  {
    return this.fireservices.collection('User').add(Record);
  }

  // tslint:disable-next-line:typedef
  get_Alluser()
  {
    return this.fireservices.collection('User').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  create_Newbooks(Record)
  {
    return this.fireservices.collection('Books').add(Record);
  }

  // tslint:disable-next-line:typedef
  get_Allbooks()
  {
    return this.fireservices.collection('Books').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  update_books(recordid, record)
  {
    this.fireservices.doc('Books/' + recordid).update(record);
  }

  // tslint:disable-next-line:typedef
  delete_books(RecordId)
  {
    this.fireservices.doc('Books/' + RecordId).delete();
  }


}
