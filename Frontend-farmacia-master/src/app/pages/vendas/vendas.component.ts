import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos/produtos.service';
import { ClientesService } from '../clientes/clientes.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { isNumber } from 'util';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  carrinho: Array<Item> = [];
  cliente;
  formProduto: FormGroup;
  constructor(fb: FormBuilder,
    public produtosService: ProdutosService, 
    public clientesService: ClientesService) {
      this.formProduto = fb.group({
        codigo: [],
        qtd: []
      })
     }

  ngOnInit() {
  }

  adicionar(cod, qtd = 1) {
    cod = this.formProduto.get("codigo").value;
    qtd = this.formProduto.get("qtd").value;
    if (!isNumber(qtd)) {
      console.log("Não é numero")
      qtd = 1;
    }

    let produto;
    let item: Item = {produto: null, qtd: qtd};

    this.produtosService.getById(cod).subscribe((data) => {
      produto = data;
      console.log(produto)

    const jaExiste = this.carrinho.filter((item) => {
      return cod === item.produto._id
    })

    console.log("Já existe? ", jaExiste)

    if ( jaExiste.length > 0 ) {
      this.carrinho.map((item, index) => {
        if (item.produto._id === cod) {
          let qtdAtual = this.carrinho[index].qtd
          qtdAtual += qtd;
          this.carrinho[index].qtd = qtdAtual;
        }
      });
    } else {
      if (produto) {
        item.produto = produto;
        item.qtd = qtd
      }
      this.carrinho.push(item);
    }

    console.log(this.carrinho);
    this.formProduto.reset();

  })
  }

  remover(cod) {
    this.carrinho.map((item, index) => {
      if (cod === item.produto._id) {
        this.carrinho.splice(index, 1);
      }
    })
  }

  valorTotal() {
    let total = 0;
    this.carrinho.map(item => {
      total += item.qtd * item.produto.valor;
    });

    return total;
  }

  concluirVenda() {
    this.carrinho = [];
  }

}

export interface Item {
  qtd: number;
  produto;
}