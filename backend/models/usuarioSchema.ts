import { Schema, model } from 'mongoose'

const usuarioSchema = new Schema({
    nome: String,
    email: String,
    senha: String
}, {
    timestamps: true,
})

export default model('Users', usuarioSchema)