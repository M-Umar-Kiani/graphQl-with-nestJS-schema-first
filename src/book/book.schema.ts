import { Field, ObjectType, Int } from "@nestjs/graphql";
import { type } from "os";

@ObjectType()
export class Book{
    @Field((type) => Int)
    id: number;

    @Field()
    title: String;

    @Field((type)=> Int, {nullable: true})
    price: number;
}