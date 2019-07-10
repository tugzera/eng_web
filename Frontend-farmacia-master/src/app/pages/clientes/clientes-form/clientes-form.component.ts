import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressService } from 'src/app/utils/address.service';
import { ClientesService } from '../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  form: FormGroup;
  formAddress: FormGroup;
  objetos: Array<any> = [];
  id;
  constructor(fb: FormBuilder,
              private clientesService: ClientesService,
              private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute ) {
    this.form = fb.group({
      __v: [],
      _id: [],
      nome: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      cpf: [""],
      dataNascimento: [],
      email: [],
      password: [null],
      status: [true, [Validators.required]],
    });

  }

  salvar() {
    if (this.id) {
      this.clientesService.update(this.form.value, this.id);
    } else {
      this.clientesService.post(this.form.value);
    }
    this.router.navigate(['/clientes']);

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let dados;
    if (this.id) {
      this.clientesService.getById(this.id).subscribe(data => {
        dados = data
        dados.dataNascimento = moment(dados.dataNascimento).format('YYYY-MM-DD')
        dados.password = null;
        this.form.setValue(dados);
        console.log(dados)
      });



    }

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

  voltar() {
    this.router.navigate(['./clientes'])
  }


}
