import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Venda } from "./Venda"


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    idcliente: number

    @Column()
    nome: string
    
    @Column()
    fone: string
    
    @Column()
    email: string

    @OneToMany(() => Venda,(Venda)=> Venda.user)
    venda: Venda[]
}