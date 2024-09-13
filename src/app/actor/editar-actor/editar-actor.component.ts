import { Component, Input, input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({ transform: numberAttribute })
  id!: number;
}
