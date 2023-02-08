import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PruductService } from "./pruduct.service";
import { PruductControllerBase } from "./base/pruduct.controller.base";

@swagger.ApiTags("pruducts")
@common.Controller("pruducts")
export class PruductController extends PruductControllerBase {
  constructor(
    protected readonly service: PruductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder, rolesBuilder);
  }
}
