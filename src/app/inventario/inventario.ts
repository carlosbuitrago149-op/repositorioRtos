import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {
  productos = [
    { nombre: 'arroz', categoria: 'grano', precio: 10000 },
    { nombre: 'frijoles', categoria: 'legumbres', precio: 15200},
    { nombre: 'lentejas', categoria: 'legumbres', precio: 200000 },
    { nombre: 'maíz', categoria: 'grano', precio: 25000 },
    { nombre: 'leche', categoria: 'lácteos', precio: 20000000 },
  ];
}
