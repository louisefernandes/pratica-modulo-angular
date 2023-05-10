import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';
import {PRODUTOS} from '../../shared/modelo/PRODUTOS';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {

  produto = PRODUTOS;
  excluir(produtoRemover: Produto): void {
    const indx = this.produtos.findIndex(produto =>
      produto.id === produtoRemover.id);

    this.produtos.splice(indx, 1);
  }

}
