import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("languages")
class Language {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;
}

export { Language };
