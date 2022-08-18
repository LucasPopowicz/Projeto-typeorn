import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { Cliente } from "./Cliente"
import { Produto } from "./produto"


@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    data: string

    @Column()
    status: string
    


    @ManyToOne(() => Cliente, (user) => user.venda)
    @JoinColumn({name:'idcliente'})
    user: Cliente
    static produto: any

    
 
}