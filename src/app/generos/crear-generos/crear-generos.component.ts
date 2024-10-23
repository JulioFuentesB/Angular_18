import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { PrimeraLetramayuscula } from '../../compartidos/Funciones/validaciones';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosCreacionDto } from '../generos';
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../compartidos/Funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent, MostrarErroresComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})


export class CrearGenerosComponent {

  private router = inject(Router);
  private generosServices = inject(GenerosService);
  errores: string[] = [];




  guardarCambios(genero: GenerosCreacionDto) {

    console.log('creando genero', genero);

    this.generosServices.crear(genero).subscribe({
      next: () => {
        this.router.navigate(['/generos']);
      },
      error: err => {

        const errores = extraerErrores(err);
        console.log(errores);
        this.errores = errores;
      }
    });

  }


}
