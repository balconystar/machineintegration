import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    petName: string;

    @Column()
    species: string;

}
