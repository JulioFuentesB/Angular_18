import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-generos',
  standalone: true,
  imports: [],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {
  @Input({transform:numberAttribute})
  id!: number ;
}
