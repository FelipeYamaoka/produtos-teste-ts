import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoInsertComponent } from './produto-insert/produto-insert.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

const routes: Routes = [

  { path: 'cadastrar', component: ProdutoInsertComponent },
  { path: 'listar', component: ListarProdutosComponent},
  { path: '', redirectTo: '/listar', pathMatch: 'full'},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}