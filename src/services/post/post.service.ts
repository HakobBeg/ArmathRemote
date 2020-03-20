import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Post} from '../../Models/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFirestore) {
  }

  getPosts() {
    return this.db.collection<Post>('posts').valueChanges();
  }

  addPost(post: Post){
    return this.db.collection('posts').add(post);
  }

}
