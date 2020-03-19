import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity()
export class User {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    fullName:string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    techs: string;

    @Column() 
    isActive:boolean;
}

