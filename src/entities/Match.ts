import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Club } from "./Club";

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "simple-array" })
  playerIds: string[];

  @ManyToOne(() => Club)
  @JoinColumn({ name: "clubId" })
  club: Club;

  @Column({ type: "uuid" })
  clubId: string;

  @Column({ type: "integer", width: 1 })
  category: number;

  @Column({ type: "timestamp" })
  startTime: Date;

  @Column({ type: "timestamp" })
  endTime: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
