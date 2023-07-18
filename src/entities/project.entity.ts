import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Language } from "./language.entity";

@Entity("projects")
class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  title: string;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @Column({ type: "int" })
  year: number;

  @Column({ type: "text", nullable: true })
  image: string | null | undefined;

  @Column({ type: "text" })
  githubPage: string;

  @Column({ type: "text", nullable: true })
  vercelPage: string | null | undefined;

  @ManyToMany(() => Language)
  @JoinTable()
  languages: Language[];
}

export { Project };
