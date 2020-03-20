import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Problem} from '../../Models/problemModel';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private db: AngularFirestore) { }


  getProblems(){
    return this.db.collection<Problem>('problems').valueChanges();
  }


}
