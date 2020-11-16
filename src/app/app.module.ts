import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';


import { ProdutoInsertComponent } from './produto-insert/produto-insert.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

import { AppRoutingModule } from './app-routing.module';
import { ProdutoService } from './produto.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule 
  ],

  declarations: [ 
    AppComponent, 
    ProdutoInsertComponent,
    ListarProdutosComponent 
 ],

  bootstrap:    [ AppComponent ],

  providers: [ProdutoService]
})
export class AppModule { }
