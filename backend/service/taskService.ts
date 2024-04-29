import TaskModel from '../models/taskSchema';

export class TaskService {
    async create(task: any) {
        const createdTask = await TaskModel.create(task)
        return createdTask
    }

    async findById(id: any) {
        const task = await TaskModel.findById(id)
        return task
    }

    async findByUserId(userId: any) {
        console.log(userId)

        const tasks = await TaskModel.find({
            userId
        })
        return tasks
    }

    async updateTask(id: any, Task: any) {
        const updatedTask = await TaskModel.findByIdAndUpdate(id, Task, { new: true });//new retorna a task modificada
        return updatedTask;
    }

    async deleteTask(id: any) {
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        return deletedTask;
    }

    async getTasksByCategory() {
        const tasks = await TaskModel.find().populate('category')

        const tasksByCategory = tasks.reduce((group: any, task: any) => {
            const { category } = task
            group[category] = group[category] ?? []
            group[category].push(task)
            return group
        }, {})

        return tasksByCategory
    }
}

export default new TaskService();
