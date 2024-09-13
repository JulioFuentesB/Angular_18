import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeraLetramayuscula } from '../../compartidos/componentes/Funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroDto, GenerosCreacionDto } from '../generos';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined)
    {
      this.form.patchValue(this.modelo)
    }
  }

  
@Input()
modelo?: GeneroDto;

@Output()
posteoFormulario= new EventEmitter<GenerosCreacionDto>

  private fromBuilder = inject(FormBuilder);

  form = this.fromBuilder.group({

    nombre: ['', { validators: [Validators.required, PrimeraLetramayuscula()] }]
  });

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return "El campo nombre es requerido";
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";

  }

  guardarCambios() {
    //this.router.navigate(['/generos']);
    console.log(this.form.value);

    if (!this.form.valid) {
      return;
    }

    const genero= this.form.value as GenerosCreacionDto;
    this.posteoFormulario.emit(genero); 
  }

}
