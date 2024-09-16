import { Component, Input, input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';
import { ActorCreacionDto, ActorDto } from '../../actores/actores';
import { FormularioActoresComponent } from "../../actores/formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({ transform: numberAttribute })
  id!: number;


  actor: ActorDto = { id: 1, nombre: 'Tom Holland', fechaNacimiento: new Date('1991-01-25') }

  guardarCambios(actor: ActorCreacionDto) {
    console.log('Editando el actor', actor);
  }


}
