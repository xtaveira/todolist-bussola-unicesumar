import { Request, Response } from "express";
import TaskService from "../service/taskService";

class TaskController {
  async create(req: Request, res: Response) {
    const task = await TaskService.create(req.body);
    return res.json(task);
  }

  async findById(req: Request, res: Response) {
    const task = await TaskService.findById(req.params.id);
    return res.json(task);
  }

  async findTasks(req: Request, res: Response) {
    const tasks = await TaskService.findAll();
    return res.json(tasks);
  }

  async findByUserId(req: Request, res: Response) {
    const tasks = await TaskService.findByUserId(req.params.userId);
    return res.json(tasks);
  }

  async updateTask(req: Request, res: Response) {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const task = await TaskService.updateTask(taskId, updatedTask);
    return res.json(task);
  }

  async deleteTask(req: Request, res: Response) {
    const taskId = req.params.id;

    const deletedTask = await TaskService.deleteTask(taskId);

    return res.json(deletedTask);
  }

  async getTaskByCategory(req: Request, res: Response) {
    const idCategory = req.params.idCategory;
    const tasksByCategory = await TaskService.getTasksByCategory(idCategory);
    return res.json(tasksByCategory);
  }

  async tasksConcluidas(req: Request, res: Response) {
    const concluidas = await TaskService.tasksConcluidas();
    return concluidas;
  }

  async tasksPendentes(req: Request, res: Response) {
    const pendentes = await TaskService.tasksPendentes();
    return pendentes;
  }
}

export default new TaskController();
