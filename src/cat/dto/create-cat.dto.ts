import { isNotEmpty,MinLength } from "class-validator";


export class CreateCatDto {
    
    @MinLength(2)
    petName: string;

    species: string;

}
