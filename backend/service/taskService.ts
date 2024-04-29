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

  async tasksConcluidas() {
    const tasks = await TaskModel.find();

    const concluidas = tasks.filter((task) => {
      console.log(task);
      return task.status == "Concluida";
    });
    return concluidas;
  }

  async tasksPendentes() {
    const tasks = await TaskModel.find();

    const concluidas = tasks.filter((task) => {
      console.log(task);
      return task.status == "Pendentes";
    });
    return concluidas;
  }

  async taskMaisRecente(userId: any) {
    const tasks = await TaskModel.find();
    const tasksByUser = tasks.filter((task) => {
      if (task.userId != null && task.userId != undefined) {
        return task.userId.toString() === userId;
      }
    });

    tasksByUser.sort((task1, task2) => {
      return (
        new Date(task1.createdAt).getTime() -
        new Date(task2.createdAt).getTime()
      );
    });
    return tasksByUser[0];
  }

  async taskComMaiorDescricao() {
    const tasks = await TaskModel.find();

    const maiorDescricao = tasks.reduce((maiorDescricao: any, task: any) => {
      // Verifica se maiorDescricao é undefined ou se a descrição da tarefa é maior
      if (
        !maiorDescricao ||
        (task.descricao &&
          task.descricao.length > maiorDescricao.descricao.length)
      ) {
        return task;
      } else {
        return maiorDescricao;
      }
    }, tasks[0]);

    return maiorDescricao;
  }
}

export default new TaskService();
