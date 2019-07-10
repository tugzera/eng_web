import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../fornecedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './fornecedores-list.component.html',
  styleUrls: ['./fornecedores-list.component.css']
})
export class FornecedoresListComponent implements OnInit {
  fornecedores: Array<any> = [];

  constructor(private fornecedorService: FornecedoresService, private router: Router) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.fornecedorService.getFornecedores().subscribe((data: Array<any>) => {
      data.forEach(fornecedor => {
        this.fornecedores.push(fornecedor);
      });
    })
  }
  add() {
    this.router.navigate(['/fornecedores/new_record']);
  }
  editar(fornecedor_id) {
    console.log(fornecedor_id);
    this.router.navigate([`/fornecedores/${fornecedor_id}`])
  }

  remover(fornecedor_id) {
    this.fornecedorService.removeFornecedores(fornecedor_id);
    this.fornecedores.forEach((value, index, array) => {
      if (value._id === fornecedor_id) {
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
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters avaifornecedorle.
     
    },
    complete: (modal, trigger) => {
    } // Callback for Modal close
  };

}
