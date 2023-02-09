import * as graphql from "@nestjs/graphql";
import { PruductResolverBase } from "./base/pruduct.resolver.base";
import { Pruduct } from "./base/Pruduct";
import { PruductService } from "./pruduct.service";

@graphql.Resolver(() => Pruduct)
export class PruductResolver extends PruductResolverBase {
  constructor(protected readonly service: PruductService) {
    super(service);
  }
}
