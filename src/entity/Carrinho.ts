import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
    JoinColumn,
} from "typeorm"

import { Categorias } from "./categoria"
import { Cliente } from "./Cliente"
import { Produto } from "./Produto"
import { Venda } from "./Venda"

@Entity()
export class Carrinho   {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: string

    @Column()
    preco: string

    @ManyToOne(() => Produto, (produto) => Categorias.produto)
    @JoinColumn({name:'idproduto'})
    categoria: Produto
    @ManyToOne(() => Venda, (produto) => Venda.produto)
    @JoinColumn({name:'idvenda'})
    Venda: Venda
}
