import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Produto } from "./Produto"
@Entity()
export class Categorias {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: string

    @Column()
    preco: string
    static produto: any
}