import {Router} from 'express';
import { UsuarioController } from './controller/UsuarioController';

const router = Router();

const usuarioController = new UsuarioController();

router.post('/usuarios', usuarioController.create);

export { router };