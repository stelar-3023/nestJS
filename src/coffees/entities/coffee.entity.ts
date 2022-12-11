import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
/* eslint-disable prettier/prettier */
@Entity() // sql table name will be 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
