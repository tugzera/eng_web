import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos: Array<any> = [];

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.produtosService.get().subscribe((data: Array<any>) => {
      data.forEach(produto => {
        this.produtos.push(produto);
      });
    })
  }
  add() {
    this.router.navigate(['/produtos/new_record']);
  }
  editar(produto_id) {
    console.log(produto_id);
    this.router.navigate([`/produtos/${produto_id}`])
  }

  remover(produto_id) {
    this.produtosService.remove(produto_id);
    this.produtos.forEach((value, index, array) => {
      if (value._id === produto_id) {
        array.splice(index, 1);
      }
    })
  }

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '100%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters avaiprodutole.
     
    },
    complete: (modal, trigger) => {
    } // Callback for Modal close
  };

}
