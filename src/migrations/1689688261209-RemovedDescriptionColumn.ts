import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedDescriptionColumn1689688261209 implements MigrationInterface {
    name = 'RemovedDescriptionColumn1689688261209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" ADD "description" text`);
    }

}
