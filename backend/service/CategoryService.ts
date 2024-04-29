import categoriaModel from "../models/categoriaSchema";

export class CategoryService {
  async create(category: any) {
    const createdCategory = await categoriaModel.create(category);
    return createdCategory;
  }

  async findAll() {
    const tasks = await categoriaModel.find();
    return tasks;
  }
  async findById(id: any) {
    const task = await categoriaModel.findById(id);
    return task;
  }

  async findAllByUserId(userId: any) {
    const tasks = await categoriaModel.find({
      userId,
    });
    return tasks;
  }

  async updateCategory(id: any, category: any) {
    const updatedCategory = await categoriaModel.findByIdAndUpdate(
      id,
      category,
      { new: true }
    );
    return updatedCategory;
  }

  async deleteCategory(id: any) {
    const deletedCategory = await categoriaModel.findByIdAndDelete(id);
    return deletedCategory;
  }
}

export default new CategoryService();
