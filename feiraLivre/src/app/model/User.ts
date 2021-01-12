import { Pedido } from "./Pedido";

export class User {
    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public telefone: string
    public cpf: string
    public dataNascimento: string
    public pedido : Pedido[]
}