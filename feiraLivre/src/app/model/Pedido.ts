import { Item } from "./Item";
import { User } from "./User";

export class Pedido {
    public id: number;
    public valor: number;
    public quantidadeItens: number;
    public data: Date;
    public usuario: User;
    public itens: Item[];
}