import { Controller, Get } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";


@Controller("/postagens")
export class postagemController{

    constructor(
        private readonly postagemService: PostagemService
    ){}

    @Get()
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }
}