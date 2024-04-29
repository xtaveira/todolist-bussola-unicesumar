import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    descricao: String,
    // dataDescricao: Date, Talvez não vai usar
    // dataConclusao: Date, Talvez não vai usar
    tipo: String,
    status: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    categoryId: { type: Schema.Types.ObjectId, ref: "Categoria" },
  },
  {
    timestamps: true,
  }
);

export default model("Task", taskSchema);
