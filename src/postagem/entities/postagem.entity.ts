import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_postagens"}) // CREATE TABLE tb_postagens
export class Postagem{
    
    @PrimaryGeneratedColumn() //PRIMARY KEY(id) AUTO INCREMENT
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())//Remover espaços em branco início e fim
    @IsNotEmpty() // NOT NULL (força digitação)
    @Column({length: 100, nullable: false}) //VARCHAR(100) NOT NULL
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())//Remover espaços em branco início e fim
    @IsNotEmpty() // NOT NULL (força digitação)
    @Length(10, 1000, {message: "O Texto deve ser entre 10 e 1000 caracteres"})
    @Column({length: 1000, nullable: false}) //VARCHAR(1000) NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;

    @ManyToOne( () => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;
}