import UsuarioModel from "../models/usuarioSchema";

export class UsuarioService {
  async create(usuario: any) {
    const createdUsuario = await UsuarioModel.create(usuario);
    return createdUsuario;
  }

  async findById(id: any) {
    const usuario = await UsuarioModel.findById(id);
    return usuario;
  }

  async findAll() {
    const usuario = await UsuarioModel.find();
    return usuario;
  }
}
export default new UsuarioService();
