import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Venda } from "./Venda"

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idproduto: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number


}