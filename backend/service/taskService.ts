import TaskModel from "../models/taskSchema";

export class TaskService {
  async create(task: any) {
    const createdTask = await TaskModel.create(task);
    return createdTask;
  }

  async findById(id: any) {
    const task = await TaskModel.findById(id);
    return task;
  }

  async findAll() {
    const tasks = await TaskModel.find();
    return tasks;
  }

  async findByUserId(userId: any) {
    console.log(userId);

    const tasks = await TaskModel.find({
      userId,
    });
    return tasks;
  }

  async updateTask(id: any, Task: any) {
    const updatedTask = await TaskModel.findByIdAndUpdate(id, Task, {
      new: true,
    }); //new retorna a task modificada
    return updatedTask;
  }

  async deleteTask(id: any) {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    return deletedTask;
  }

  async getTasksByCategory(idCategory: any) {
    const tasks = await TaskModel.find();

    const tasksByCategory = tasks.filter((task) => {
      return task.categoryId == idCategory;
    });

    return tasksByCategory;
  }
}

export default new TaskService();
