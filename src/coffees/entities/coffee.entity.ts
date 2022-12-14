/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table name will be 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true})
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() // Join the 2 tables - only the owner side does this
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true }) // what is "coffee"within the Flavor entity?
  flavors: Flavor[];
}
