import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import TaskController from "../controllers/TaskController";
import UserController from "../controllers/UserController";

const routes = Router();

// TAREFAS

routes.post("/task", TaskController.create);
routes.get("/tasks", TaskController.findTasks);
routes.get("/task/:id", TaskController.findById);
routes.get("/usertask/:userId", TaskController.findByUserId);
routes.put("/uptask/:id", TaskController.updateTask);
routes.delete("/deltask/:id", TaskController.deleteTask);

// USUÁRIOS

routes.post("/user", UserController.create);
routes.get("/user/:id", UserController.findById);
routes.get("/users/", UserController.findUsers);

// CATEGORIAS

routes.post("/category", CategoryController.create);
routes.get("/category/:id", CategoryController.findById);
routes.get("/categories", CategoryController.findCategories);
routes.get("/catusuario/:userId", CategoryController.findByUserId);
routes.put("/upcategory/:id", CategoryController.updateCategory);
routes.delete("/delcategory/:id", CategoryController.deleteCategory);

//FUNCIONALIDADES ADICIONAIS

routes.get("/tasksbycategory/:idCategory", TaskController.getTaskByCategory);

export { routes };
