import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Usuarios {

    usuarios = [
        {
            nombre: 'María',
            edad: 28,
            ciudad: 'Madrid'
        },
        {
            nombre: 'Carlos',
            edad: 35,
            ciudad: 'Barcelona'
        },
        {
            nombre: 'Laura',
            edad: 24,
            ciudad: 'Sevilla'
        },
        {
            nombre: 'Pedro',
            edad: 42,
            ciudad: 'Valencia'
        }
    ];

    obtenerUsuarios() {
        return this.usuarios;
    }

}