import { Component } from '@angular/core';
import { CineCreacionDto } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-crear-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {

  guardarCambios(cine:CineCreacionDto)
  {
    console.log('Creando cines', cine);
  }

}
