import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: Produto;
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(): void {
    const codigo = +this.route.snapshot.paramMap.get('codigo');
    this.produtoService.getProduto(codigo)
      .subscribe(codigo => this.produto = Produto);
  }

  goBack(): void {
    this.location.back();
  }

}