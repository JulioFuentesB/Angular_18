import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { CineCreacionDto, CineDto } from '../cines';

@Component({
  selector: 'app-editar-cines',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css'
})
export class EditarCinesComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  cine: CineDto =  {id: 1, nombre: 'Acrópolis', latitud: 18.46961051555802, longitud: -69.93936129979956};

  guardarCambios(cine: CineCreacionDto) {

    console.log('Editando el cine', cine);


  }

}
