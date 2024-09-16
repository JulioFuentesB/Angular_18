export interface ActorDto {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto?: string;
}


export interface ActorCreacionDto {
    nombre: string;
    fechaNacimiento: Date;
    foto?: File;
}