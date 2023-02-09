/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePruductArgs } from "./CreatePruductArgs";
import { UpdatePruductArgs } from "./UpdatePruductArgs";
import { DeletePruductArgs } from "./DeletePruductArgs";
import { PruductFindManyArgs } from "./PruductFindManyArgs";
import { PruductFindUniqueArgs } from "./PruductFindUniqueArgs";
import { Pruduct } from "./Pruduct";
import { User } from "../../user/base/User";
import { PruductService } from "../pruduct.service";
@graphql.Resolver(() => Pruduct)
export class PruductResolverBase {
  constructor(protected readonly service: PruductService) {}

  async _pruductsMeta(
    @graphql.Args() args: PruductFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Pruduct])
  async pruducts(
    @graphql.Args() args: PruductFindManyArgs
  ): Promise<Pruduct[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Pruduct, { nullable: true })
  async pruduct(
    @graphql.Args() args: PruductFindUniqueArgs
  ): Promise<Pruduct | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Pruduct)
  async createPruduct(
    @graphql.Args() args: CreatePruductArgs
  ): Promise<Pruduct> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        test: args.data.test
          ? {
              connect: args.data.test,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Pruduct)
  async updatePruduct(
    @graphql.Args() args: UpdatePruductArgs
  ): Promise<Pruduct | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          test: args.data.test
            ? {
                connect: args.data.test,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Pruduct)
  async deletePruduct(
    @graphql.Args() args: DeletePruductArgs
  ): Promise<Pruduct | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, { nullable: true })
  async test(@graphql.Parent() parent: Pruduct): Promise<User | null> {
    const result = await this.service.getTest(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
