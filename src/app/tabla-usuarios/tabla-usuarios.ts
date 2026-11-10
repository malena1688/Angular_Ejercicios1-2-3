import { Component, inject } from '@angular/core';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-tabla-usuarios',
  imports: [],
  templateUrl: './tabla-usuarios.html',
  styleUrl: './tabla-usuarios.css'
})
export class TablaUsuarios {

  usuariosService = inject(Usuarios);

  listaUsuarios = this.usuariosService.obtenerUsuarios();

}