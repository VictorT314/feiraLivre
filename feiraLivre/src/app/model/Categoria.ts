import { Produto } from './Produto';

export class Categoria {
    public id:number;
    public categoria: string;
    public organico: boolean;
    public unidadeMedida: string;
    public produtos: Produto[];
}