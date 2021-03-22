import {getConnectionOptions, MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class CreateUser1615946659338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const table = new Table({
            name: "usuario",
            columns:[
                {
                    name: "id",
                    type: "int",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                    
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: '50',
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: '50',
                    isNullable: false
                },
                {
                    name: "senha",
                    type: "varchar",
                    length: '255',
                    isNullable: false
                },
                {
                    name: "ativo",
                    type: "tinyint",
                    unsigned: true,
                    default: 1
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                    isNullable: false
                }
            ]
        });

        await queryRunner.createTable(table);

        await queryRunner.createIndex(table, new TableIndex({
            name: "IDX_CHAVE",
            columnNames: ['email'],
            isUnique: true
        }));

        await queryRunner.createIndex(table, new TableIndex({
            name: "IDX_USUARIO_EMAIL",
            columnNames: ['email']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('usuario');
    }

}
