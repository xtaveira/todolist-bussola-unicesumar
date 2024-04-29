import { Request, Response } from "express";
import { CategoryService } from "../service/CategoryService";

class CategoryController {
  async create(req: Request, res: Response) {
    const category = await new CategoryService().create(req.body);
    return res.json(category);
  }

  async findById(req: Request, res: Response) {
    const category = await new CategoryService().findById(req.params.id);
    return res.json(category);
  }

  async findCategories(req: Request, res: Response) {
    const tasks = await new CategoryService().findAll();
    return res.json(tasks);
  }

  async findByUserId(req: Request, res: Response) {
    const tasks = await new CategoryService().findAllByUserId(
      req.params.userId
    );
    return res.json(tasks);
  }

  async updateCategory(req: Request, res: Response) {
    const categoryId = req.params.id;
    const updatedCategory = req.body;
    const category = await new CategoryService().updateCategory(
      categoryId,
      updatedCategory
    );
    return res.json(category);
  }

  async deleteCategory(req: Request, res: Response) {
    const categoryId = req.params.id;

    const deletedCategory = await new CategoryService().deleteCategory(
      categoryId
    );

    return res.json(deletedCategory);
  }
}

export default new CategoryController();
