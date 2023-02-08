import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PruductServiceBase } from "./base/pruduct.service.base";

@Injectable()
export class PruductService extends PruductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
