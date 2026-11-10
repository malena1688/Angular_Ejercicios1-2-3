import { Component } from '@angular/core';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css'
})
export class CreateCustomer {

  clienteForm = new FormGroup({

    nombre: new FormControl(''),

    cif: new FormControl(''),

    localidad: new FormControl('')

  });
  enviarFormulario() {
  console.log('Datos del cliente:', this.clienteForm.value);
}

}