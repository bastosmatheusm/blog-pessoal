import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./service/tema.service";
import { temaController } from "./controllers/tema.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Tema])],
    controllers:[temaController],
    providers:[TemaService],
    exports:[TemaService],
})
export class TemaModule{}