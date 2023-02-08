/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PruductWhereInput } from "./PruductWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PruductListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PruductWhereInput,
  })
  @ValidateNested()
  @Type(() => PruductWhereInput)
  @IsOptional()
  @Field(() => PruductWhereInput, {
    nullable: true,
  })
  every?: PruductWhereInput;

  @ApiProperty({
    required: false,
    type: () => PruductWhereInput,
  })
  @ValidateNested()
  @Type(() => PruductWhereInput)
  @IsOptional()
  @Field(() => PruductWhereInput, {
    nullable: true,
  })
  some?: PruductWhereInput;

  @ApiProperty({
    required: false,
    type: () => PruductWhereInput,
  })
  @ValidateNested()
  @Type(() => PruductWhereInput)
  @IsOptional()
  @Field(() => PruductWhereInput, {
    nullable: true,
  })
  none?: PruductWhereInput;
}
export { PruductListRelationFilter };
