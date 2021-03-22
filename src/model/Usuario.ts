import { createHash } from "crypto";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
class Usuario {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column({ select: false })
    senha: string;

    @CreateDateColumn()
    created_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashSenha() {
        
        if (this.senha) {

            this.senha = createHash('sha256').update(this.senha).digest('hex');
        }
    }

}

export { Usuario }