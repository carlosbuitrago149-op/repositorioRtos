import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
   color = '';
  mensaje = '';

  seleccionar(color: 'rojo' | 'amarillo' | 'verde') {
    this.color = color;

    switch (color) {
      case 'rojo':
        this.mensaje = 'Detenerse';
        break;
      case 'amarillo':
        this.mensaje = 'Precaución';
        break;
      case 'verde':
        this.mensaje = 'Avanzar';
        break;
    }
  }
}
