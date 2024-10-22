import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {

  generosServices = inject(GenerosService);

  constructor() {

    this.generosServices.ObtenerTodos().subscribe(generos => {
      console.log(generos);
    });

  }

}
