import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class Item {
    public id : number
    public quantidade: number;
    public pedido: Pedido;
    public produto: Produto;
}