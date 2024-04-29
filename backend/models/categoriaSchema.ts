import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
    nome: String,
    cor: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
})

export default model('Categoria', categoriaSchema)