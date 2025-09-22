import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  sessionToken: string;

  @Column()
  userId: string;

  @Column()
  expires: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}