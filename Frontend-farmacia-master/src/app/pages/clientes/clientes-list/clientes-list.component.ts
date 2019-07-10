import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Array<any> = [];

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.clientesService.get().subscribe((data: Array<any>) => {
      data.forEach(fornecedor => {
        this.clientes.push(fornecedor);
      });
    })
  }
  add() {
    this.router.navigate(['/clientes/new_record']);
  }
  editar(fornecedor_id) {
    console.log(fornecedor_id);
    this.router.navigate([`/clientes/${fornecedor_id}`])
  }

  remover(fornecedor_id) {
    this.clientesService.remove(fornecedor_id);
    this.clientes.forEach((value, index, array) => {
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
