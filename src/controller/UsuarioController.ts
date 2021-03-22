import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { AppError } from '../errors/AppError';
import { UsuariosRepository } from "../repositories/UsuariosRepository";


class UsuarioController {

    async create(request: Request, response: Response) {

        const { nome, email, senha } = request.body;
        const usuarioRepository = getCustomRepository(UsuariosRepository);

        const usuarioExiste = await usuarioRepository.findOne({
            email
        });

        if (usuarioExiste) {
            
            throw new AppError('Usuário já existe');
        }

        
        const usuario = usuarioRepository.create({
            nome, email, senha
        });
        
        await usuarioRepository.save(usuario);

        return response.status(201).json(usuario);
    }
}

export { UsuarioController }