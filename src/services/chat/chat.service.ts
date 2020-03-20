import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Message} from '../../Models/messageModel';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private db: AngularFirestore) {

  }


  getChatCollection() {
    return this.db.collection('messages').get();
  }

  getChatMessagesByName() {
    return this.db.collection<Message>(`messages`);
  }

  submitMessageToChat( message: Message) {
    return this.db.collection('messages').add(message);
  }

}
