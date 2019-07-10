import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/utils/address.service';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-form',
  templateUrl: './funcionarios-form.component.html',
  styleUrls: ['./funcionarios-form.component.css']
})
export class FuncionariosFormComponent implements OnInit {

  form: FormGroup;
  formAddress: FormGroup;
  objetos: Array<any> = [];
  id;
  constructor(fb: FormBuilder,
              private funcionariosService: FuncionariosService,
              private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute ) {
    this.form = fb.group({
      __v: [],
      _id: [],
      nome: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      email: [],
      cargo: [],
      password: [null, [Validators.required]],
      status: [true, [Validators.required]],
      isAdmin: [false, [Validators.required]]
    });

  }

  salvar() {
    if (this.id) {
      this.funcionariosService.updateFuncionarios(this.form.value, this.id);
    } else {
      this.funcionariosService.postFuncionarios(this.form.value);
    }
    this.router.navigate(['/funcionarios']);

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let dados;
    if (this.id) {
      this.funcionariosService.getFuncionariosById(this.id).subscribe(data => {
        console.log(data);
        dados = data
        dados.password = null;
        this.form.setValue(dados);
      });

      console.log(dados)

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
    this.router.navigate(['./funcionarios'])
  }

}
