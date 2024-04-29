import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: String,
    descricao: String,
    dataDescricao: Date,
    dataConclusao: Date,
    tipo: String,
    status: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    categoryId: { type: Schema.Types.ObjectId, ref: "Categoria" }
}, {
    timestamps: true
});

export default model('Task', taskSchema);
