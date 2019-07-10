import mongoose from 'mongoose'

export interface Funcionario extends mongoose.Document {
    nome: String;
    email: String;
    password: String;
    telefone: String;
    status: Boolean;
    isAdmin: Boolean;
    cargo: String;
}

const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    telefone: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    cargo: {
        type: String
    }
})

export const Funcionario = mongoose.model<Funcionario>('Funcionario', funcionarioSchema)