import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Estudiante {
  nombre: string;
  programa: string;
  edad: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-estudiantes',
  styleUrl: './estudiantes.css',
  templateUrl: './estudiantes.html',
})
export class Estudiantes {
  nombre = '';
  programa = '';
  edad: number | null = null;

  mensajeError = '';
  estudiantes: Estudiante[] = [];

  registrar() {
    const nombre = this.nombre.trim();
    const programa = this.programa.trim();
    const edad = this.edad;

    if (nombre === '') {
      this.mensajeError = 'El nombre no puede estar vacío.';
      return;
    }
    if (programa === '') {
      this.mensajeError = 'Debes indicar el programa.';
      return;
    }
    if (edad === null || edad < 15 || edad > 100) {
      this.mensajeError = 'Ingresa una edad válida (entre 15 y 100).';
      return;
    }

    this.estudiantes.push({ nombre, programa, edad });

    this.nombre = '';
    this.programa = '';
    this.edad = null;
    this.mensajeError = '';
  }
}
