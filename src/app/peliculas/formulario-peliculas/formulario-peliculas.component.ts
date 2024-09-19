import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { peliculaCreacionDto, peliculaDto } from '../peliculas';
import moment from 'moment';

@Component({
  selector: 'app-formulario-peliculas',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent implements OnInit {
  ngOnInit(): void {

    if (this.modelo !== undefined) {

      this.form.patchValue(this.modelo);
    }

  }

  @Input()
  modelo?: peliculaDto;

  @Output()
  posteoFormulario = new EventEmitter<peliculaCreacionDto>

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: ['', { validators: [Validators.required] }],
    fechaLanzamiento: new FormControl<Date | null>(null, { validators: [Validators.required] }),
    trailer: '',
    poster: new FormControl<File | string | null>(null)

  });


  archivoSeleccionado(file: File) {
    this.form.controls.poster.setValue(file);
  }


  guardarCambios() {

    if (!this.form.valid) {

      return;
    }

    const pelicula = this.form.value as peliculaCreacionDto;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();
    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo(): string{

    let campo = this.form.controls.titulo;

    if(campo.hasError('required'))
    {

      return 'El campo nombre es requerido';
    }

    return '';
  }


  obtenerErrorCampoFechalanzamiento(): string{

    let campo = this.form.controls.fechaLanzamiento;

    if(campo.hasError('required'))
    {

      return 'El campo fecha Lanzamiento es requerido';
    }

    return '';
  }

}
