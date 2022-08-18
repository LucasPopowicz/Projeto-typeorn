import { DataSource } from "typeorm"
import { Categorias } from "./entity/categoria";
import { Cliente } from "./entity/Cliente";
import {  Venda } from "./entity/Venda";

import { Carrinho } from "./entity/Carrinho";
import { Produto } from "./entity/Produto";


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    /*entities: [".src/entity/*.ts"],*/
    entities: [Produto,Venda, Carrinho, Cliente],
    logging: false,
    synchronize: true,
})

export default dataSource;