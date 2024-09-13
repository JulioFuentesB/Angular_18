import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-cines',
  standalone: true,
  imports: [],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css'
})
export class EditarCinesComponent {

  @Input({ transform: numberAttribute })
  id!: number;

}
