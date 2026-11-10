import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { Container } from './container/container';
import { Footer } from './footer/footer';
import { TablaUsuarios } from './tabla-usuarios/tabla-usuarios';
import { CreateCustomer } from './create-customer/create-customer';
@Component({
  selector: 'app-root',
  imports: [Nav, Container,Footer,TablaUsuarios, CreateCustomer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}