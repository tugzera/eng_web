import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FornecedoresService} from "../fornecedores.service";
import {AddressService} from '../../../utils/address.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { Endereco } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-fornecedores-form',
  templateUrl: './fornecedores-form.component.html',
  styleUrls: ['./fornecedores-form.component.css']
})
export class FornecedoresFormComponent implements OnInit {

  form: FormGroup;
  formAddress: FormGroup;
  objetos: Array<any> = [];
  id;
  constructor(fb: FormBuilder,
              private fornecedoresServices: FornecedoresService,
              private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute ) {
    this.form = fb.group({
      __v: [],
      _id: [],
      nome: ["", [Validators.required]],
      razaoSocial: ["", [Validators.required]],
      endereco: [],
      telefone: ["", [Validators.required]],
      email: [],
      status: ["", [Validators.required]],
      cnpj: ["", [Validators.required]]
    });

    this.formAddress = fb.group({
      rua: ["", [Validators.required]],
      cep: ['', {updateOn: 'blur'},[Validators.required]],
      cidade: ["", [Validators.required]],
      uf: ["", [Validators.required, Validators.maxLength(2)]],
      numero: ["", [Validators.required]],
      complemento: [],
      bairro: ["", [Validators.required]]
    });

/*     this.formAddress.get("cep").valueChanges.subscribe(() => {
      let address;
      address = addressService.getAddress(this.formAddress.get("cep").value).subscribe((data: Endereco) => {
        console.log("Data => ", data)
        this.formAddress.get('rua').setValue(data.logradouro);
        this.formAddress.get('bairro').setValue(data.bairro);
        this.formAddress.get('cidade').setValue(data.localidade);
        this.formAddress.get('uf').setValue(data.uf);
      });
      console.log(address);
    }) */
  }

  salvar() {
    this.form.get("endereco").setValue(this.formAddress.value);
    console.log(this.form);


    console.log(this.objetos);
    if (this.id) {
      this.fornecedoresServices.updateFornecedores(this.form.value, this.id);
    } else {
      this.fornecedoresServices.postFornecedores(this.form.value);
    }
    this.router.navigate(['/fornecedores']);

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let dados;
    if (this.id) {
      this.fornecedoresServices.getFornecedoresById(this.id).subscribe(data => {
        console.log(data);
        dados = data
        this.form.setValue(dados);
        this.formAddress.setValue(dados.endereco)
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
    this.router.navigate(['./fornecedores'])
  }

}
