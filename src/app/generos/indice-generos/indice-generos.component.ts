import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';
import { GeneroDto } from '../generos';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-generos',
  standalone: true,
  imports: [RouterLink, MatButtonModule, ListadoGenericoComponent, MatTableModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  //estamosEnProduccion= environment.production;
  generosServices = inject(GenerosService);
  generos!: GeneroDto[];
  columnasAMostrar = ['id', 'nombre', 'acciones']

  constructor() {

    this.generosServices.ObtenerTodos().subscribe(generos => {
      console.log(generos);

      this.generos = generos;
    });

  }

}
