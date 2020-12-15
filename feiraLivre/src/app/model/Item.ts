import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class Item {
    public quantidade: number;
    public pedido: Pedido;
    public unidadeMedida: string;
    public produto: Produto;
}