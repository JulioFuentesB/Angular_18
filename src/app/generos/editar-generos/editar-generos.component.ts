import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroDto, GenerosCreacionDto } from '../generos';


@Component({
  selector: 'app-editar-generos',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  genero : GeneroDto ={id:1, nombre:'Accion'}


  guardarCambios(genero: GenerosCreacionDto) {
    console.log('editando el genero', genero)
  }

}
