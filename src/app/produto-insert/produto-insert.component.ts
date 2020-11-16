import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-insert',
  templateUrl: './produto-insert.component.html',
  styleUrls: ['./produto-insert.component.css']
})
export class ProdutoInsertComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  salvar(codigo: number, descricao: string, valor: number, fornecedor: string) {
    this.produtoService.insert({codigo, descricao, valor, fornecedor} as Produto);
  }

}