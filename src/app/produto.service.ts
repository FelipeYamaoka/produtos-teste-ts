import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Produto } from './produto';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class ProdutoService {

  constructor(private db: AngularFireDatabase) { }

  insert(produto: Produto) {
    
    this.db.list('produtos').push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  getAll() {
    return this.db.list('produtos')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

}