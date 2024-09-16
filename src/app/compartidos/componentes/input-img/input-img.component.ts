import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../Funciones/toBase64';
import { StringLiteral } from 'typescript';

@Component({
  selector: 'app-input-img',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  @Input({ required: true })
  titulo!: string;

  @Output()
  archivoSeleccionado = new EventEmitter<File>();

  @Input()
  urlImagenActual?: string;

  imagenBase64?: string;

  cambio(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file: File = input.files[0];

      toBase64(file).then((valor: string) => this.imagenBase64 = valor)
        .catch(error => console.log(error));

      this.archivoSeleccionado.emit(file);
      this.urlImagenActual= undefined;
    }
  }


}
