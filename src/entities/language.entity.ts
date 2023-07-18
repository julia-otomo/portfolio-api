import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("languages")
class Language {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20 })
  name: string;
}

export { Language };
