import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  nombre: string = '';
  edad: number = 0;
  mensaje: string = '';

  verificarEdad() {
    if (this.edad >= 18) {
      this.mensaje = `${this.nombre} es mayor de edad`;
    } else {
      this.mensaje = `${this.nombre} es menor de edad`;
    }
  }
}