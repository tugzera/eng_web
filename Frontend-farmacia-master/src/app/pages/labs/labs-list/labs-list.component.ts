import { Component, OnInit } from '@angular/core';
import {LabsService} from "../labs.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-labs-list',
  templateUrl: './labs-list.component.html',
  styleUrls: ['./labs-list.component.css']
})
export class LabsListComponent implements OnInit {


  laboratorios: Array<any> = [];

  constructor(private labsService: LabsService, private router: Router) { }

  ngOnInit() {
    this.loadList()
  }

  loadList() {
    this.labsService.getLabs().subscribe((data: Array<any>) => {
      data.forEach(lab => {
        this.laboratorios.push(lab);
      });

    })

  }

  add() {
    this.router.navigate(['/labs/new_record']);
  }
  editar(lab_id) {
    console.log(lab_id);
    this.router.navigate([`/labs/${lab_id}`])
  }

  remover(lab_id) {
    this.labsService.removeLabs(lab_id);
    this.laboratorios.forEach((value, index, array) => {
      if (value._id === lab_id) {
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
