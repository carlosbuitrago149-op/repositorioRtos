import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-inventario-basico',
  styleUrl: './inventario-basico.css',
  templateUrl: './inventario-basico.html',
})
export class InventarioBasico {
  nombre = '';
  cantidad: number | null = null;
  precio: number | null = null;

  mensajeError = '';
  productos: Producto[] = [];

  agregar() {
    const nombre = this.nombre.trim();
    const cantidad = this.cantidad;
    const precio = this.precio;

    if (nombre === '') {
      this.mensajeError = 'El nombre no puede estar vacío.';
      return;
    }
    if (cantidad === null || cantidad <= 0) {
      this.mensajeError = 'La cantidad debe ser mayor que 0.';
      return;
    }
    if (precio === null || precio < 0) {
      this.mensajeError = 'El precio no puede ser negativo.';
      return;
    }

    this.productos.push({ nombre, cantidad, precio });

    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
    this.mensajeError = '';
  }

  eliminar(indice: number) {
    this.productos.splice(indice, 1);
  }

  totalProducto(p: Producto) {
    return p.cantidad * p.precio;
  }

  get totalGeneral() {
    return this.productos.reduce((suma, p) => suma + p.cantidad * p.precio, 0);
  }
}
