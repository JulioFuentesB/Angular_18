import { Component, Input, input } from '@angular/core';
import { SelectorMultipleDto } from '../SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  standalone: true,
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {


  @Input({ required: true })
  Seleccionados!: SelectorMultipleDto[];

  @Input({ required: true })
  NoSeleccionados!: SelectorMultipleDto[];

  seleccionar(elemento: SelectorMultipleDto, indice: number) {
    this.Seleccionados.push(elemento);
    this.NoSeleccionados.splice(indice, 1);
  }

  deseleccionar(elemento: SelectorMultipleDto, indice: number) {
    this.NoSeleccionados.push(elemento);
    this.Seleccionados.splice(indice, 1);
  }

  seleccionarTodo() {
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados.length = 0;
  }

  deseleccionarTodo() {
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0;
  }

}
