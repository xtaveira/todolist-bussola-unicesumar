import { Request, Response } from "express";
import usuarioService, { UsuarioService } from "../service/usuarioService";

class userController {
  async create(req: Request, res: Response) {
    const createdUser = await usuarioService.create(req.body);

    return res.status(200).json(createdUser);
  }

  async findById(req: Request, res: Response) {
    const user = await new UsuarioService().findById(req.params.id);
    return res.json(user);
  }

  async findUsers(req: Request, res: Response) {
    const users = await new UsuarioService().findAll();
    return res.json(users);
  }
}

export default new userController();
