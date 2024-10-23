import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PrimeraLetramayuscula(): ValidatorFn {
    return (Control: AbstractControl): ValidationErrors | null => {
        const valor = <string>Control.value;
        if (!valor)
            return null;
        if (valor.length === 0)
            return null;
        const primeraLetra = valor[0];
        if (primeraLetra !== primeraLetra.toUpperCase()) {
            return {
                primeraLetraMayuscula:
                {
                    mensaje: 'la primera letra debae se mayuscula'
                }
            }
        }
        return null;


    }
}

export function fechaNoPuedeSerFutura(): ValidatorFn {
    return (Control: AbstractControl): ValidationErrors | null => {
        const fechaEscogidaPorElUsuario = new Date(Control.value);
        const hoy = new Date();

        if (fechaEscogidaPorElUsuario > hoy) {
            return {

                futuro: {
                    mensaje: 'La fecha no puede ser del futuro'
                }
            }
        }
        return null;
    }

}