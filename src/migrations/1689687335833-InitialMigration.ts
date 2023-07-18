import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1689687335833 implements MigrationInterface {
    name = 'InitialMigration1689687335833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "languages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "description" text, CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(50) NOT NULL, "description" text, "year" integer NOT NULL, "image" text, "githubPage" text NOT NULL, "vercelPage" text, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects_languages_languages" ("projectsId" uuid NOT NULL, "languagesId" uuid NOT NULL, CONSTRAINT "PK_a18feffd59d92d0b90b086b3969" PRIMARY KEY ("projectsId", "languagesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_22b56f99b0f33c44a6bf528eea" ON "projects_languages_languages" ("projectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1092c862e95f49b39d093bf61b" ON "projects_languages_languages" ("languagesId") `);
        await queryRunner.query(`ALTER TABLE "projects_languages_languages" ADD CONSTRAINT "FK_22b56f99b0f33c44a6bf528eea8" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "projects_languages_languages" ADD CONSTRAINT "FK_1092c862e95f49b39d093bf61b9" FOREIGN KEY ("languagesId") REFERENCES "languages"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects_languages_languages" DROP CONSTRAINT "FK_1092c862e95f49b39d093bf61b9"`);
        await queryRunner.query(`ALTER TABLE "projects_languages_languages" DROP CONSTRAINT "FK_22b56f99b0f33c44a6bf528eea8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1092c862e95f49b39d093bf61b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_22b56f99b0f33c44a6bf528eea"`);
        await queryRunner.query(`DROP TABLE "projects_languages_languages"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "languages"`);
    }

}
