import { Module } from "@nestjs/common";
import { PruductModuleBase } from "./base/pruduct.module.base";
import { PruductService } from "./pruduct.service";
import { PruductController } from "./pruduct.controller";
import { PruductResolver } from "./pruduct.resolver";

@Module({
  imports: [PruductModuleBase],
  controllers: [PruductController],
  providers: [PruductService, PruductResolver],
  exports: [PruductService],
})
export class PruductModule {}
