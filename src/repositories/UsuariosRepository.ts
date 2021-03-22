import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../model/Usuario";

@EntityRepository(Usuario)
class UsuariosRepository extends Repository<Usuario> {}

export { UsuariosRepository }