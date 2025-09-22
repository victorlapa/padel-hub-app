import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar", nullable: true })
  name: string;

  @Column({ type: "varchar", nullable: true })
  image: string;

  @Column({ type: "varchar", nullable: true })
  firstname: string;

  @Column({ type: "varchar", nullable: true })
  lastname: string;

  @Column({ type: "varchar", nullable: true })
  phone: string;

  @Column({ type: "integer", default: 1000 })
  elo: number;

  @Column({ type: "timestamp", nullable: true })
  emailVerified: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}