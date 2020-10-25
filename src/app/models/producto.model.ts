export class ProductoModel {
    id: number;
    codigo: string;
    nombre: string;
    precio: number;
    cantidad: number;
    descripcion: string;
    createDate: Date;
    lastUpdate: Date;
    estado: boolean;

constructor()
{
    this.estado = true;
}

}

