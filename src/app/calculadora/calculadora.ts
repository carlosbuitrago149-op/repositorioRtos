import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
contador1: number=0;
contador2: number =0;
resultado: number=0;

sumar(){
  this.resultado = Number(this.contador1) + Number(this.contador2);
}
resta(){
  this.resultado = Number(this.contador1) - Number(this.contador2);
}
}
