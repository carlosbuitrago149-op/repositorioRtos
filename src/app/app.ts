import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora } from './calculadora/calculadora';
import { Inventario } from './inventario/inventario';
import { Estudiantes } from './estudiantes/estudiantes';
import { Semaforo } from './semaforo/semaforo';
import { InventarioBasico } from './inventario-basico/inventario-basico';

@Component({
  imports: [RouterOutlet, Calculadora, Inventario, Estudiantes, Semaforo, InventarioBasico],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-RETO_11-11');
}
