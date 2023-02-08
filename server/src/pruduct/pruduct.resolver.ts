import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PruductResolverBase } from "./base/pruduct.resolver.base";
import { Pruduct } from "./base/Pruduct";
import { PruductService } from "./pruduct.service";

@graphql.Resolver(() => Pruduct)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PruductResolver extends PruductResolverBase {
  constructor(
    protected readonly service: PruductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
