import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_temas"}) // CREATE TABLE tb_temas
export class Tema{
    
    @PrimaryGeneratedColumn() //PRIMARY KEY(id) AUTO INCREMENT
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())//Remover espaços em branco início e fim
    @IsNotEmpty() // NOT NULL (força digitação)
    @Length(10, 255, {message: "A Descrição deve ser entre 10 e 255 caracteres"})
    @Column({length: 255, nullable: false}) //VARCHAR(255) NOT NULL
    descricao: string;

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[];
}