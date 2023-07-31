import { Resolver, Query } from "@nestjs/graphql";

@Resolver("Book")
export class BookResolver{

    @Query("books")
    getAllBooks(){
        return [
            {id: 1, title: "C++" , price: 500},
            {id: 2, title: "Java" , price: 900},
            {id: 3, title: "C#" , price: 1500}
        ]
    }


}