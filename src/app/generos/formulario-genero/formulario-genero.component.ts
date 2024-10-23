import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeraLetramayuscula } from '../../compartidos/Funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroDto, GenerosCreacionDto } from '../generos';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, InputImgComponent],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }


  @Input()
  modelo?: GeneroDto;

  @Output()
  posteoFormulario = new EventEmitter<GenerosCreacionDto>

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required, PrimeraLetramayuscula(), Validators.maxLength(50)] }]
  });

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return "El campo nombre es requerido";
    }

    if (nombre.hasError('maxlength')){
      return `El campo nombre no puede tener más de ${nombre.getError('maxlength').requiredLength} caracteres`;
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

    const genero = this.form.value as GenerosCreacionDto;
    this.posteoFormulario.emit(genero);
  }

}
