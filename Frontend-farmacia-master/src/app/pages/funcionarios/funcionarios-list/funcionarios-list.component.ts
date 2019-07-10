import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.css']
})
export class FuncionariosListComponent implements OnInit {

  funcionarios: Array<any> = [];

  constructor(private funcionarioService: FuncionariosService, private router: Router) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.funcionarioService.getFuncionarios().subscribe((data: Array<any>) => {
      data.forEach(funcionario => {
        this.funcionarios.push(funcionario);
      });

    })
  }

  add() {
    this.router.navigate(['/funcionarios/new_record']);
  }
  editar(funcionario_id) {
    console.log(funcionario_id);
    this.router.navigate([`/funcionarios/${funcionario_id}`])
  }

  remover(funcionario_id) {
    this.funcionarioService.removeFuncionarios(funcionario_id);
    this.funcionarios.forEach((value, index, array) => {
      if (value._id === funcionario_id) {
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
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters available.
     
    },
    complete: (modal, trigger) => {

    } // Callback for Modal close
  };

}
