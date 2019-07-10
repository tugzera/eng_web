import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/utils/address.service';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  form: FormGroup;
  formAddress: FormGroup;
  objetos: Array<any> = [];
  id;
  constructor(fb: FormBuilder,
              private produtosService: ProdutosService,
              private addressService: AddressService,
              private router: Router,
              private route: ActivatedRoute ) {
    this.form = fb.group({
      __v: [],
      _id: [],
      nomeProduto: ["", [Validators.required]],
      valor: ["", [Validators.required]],
      codProduto: ["", [Validators.required]],
      descricao: ["", [Validators.required]],
      dosagem: ["", [Validators.required]],
      gtinEAN: ["", [Validators.required]],
      marca: ["", [Validators.required]],
      registroMs: ["", [Validators.required]],
      fator: ["", [Validators.required]],
      lab: ["", [Validators.required]],
      principioAtivo: ["", [Validators.required]],
      restricao: ["", [Validators.required]],
      peso: ["", [Validators.required]],
      status: [true, [Validators.required]],
    });

  }

  salvar() {
    if (this.id) {
      this.produtosService.update(this.form.value, this.id);
    } else {
      this.produtosService.post(this.form.value);
    }
    this.router.navigate(['/produtos']);

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let dados;
    if (this.id) {
      this.produtosService.getById(this.id).subscribe(data => {
        this.form.setValue(data);
        console.log(data)
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
    this.router.navigate(['./produtos'])
  }


}
