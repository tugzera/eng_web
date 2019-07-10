import mongoose, { Schema } from 'mongoose';
import { Laboratorio, laboratorioSchema } from '../laboratorio/laboratorio.model';

export interface Produto extends mongoose.Document {
    _id: Object;
    codProduto: Number;
    nomeProduto: String;
    descricao: String;
    dosagem: String;
    gtinEAN: String;
    marca: String;
    registroMs: String;
    fator: String;
    lab: Schema.Types.ObjectId | Laboratorio;
    principioAtivo: String;
    restricao: Boolean;
    peso: Number;
    valor: Number;
    status: Boolean;
}

export const produtoSchema = new mongoose.Schema({
    codProduto: {
        type: Number,
        required: true
    },
    nomeProduto: {
        type: String
    },
    descricao: {
        type: String
    },
    dosagem: {
        type: String,
        required: true
    },
    gtinEAN: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    registroMs: {
        type: String,
        required: true
    },
    fator: {
        type: String
    },
    lab: {
        type: Schema.Types.ObjectId,
        ref: 'Laboratorio',
        required: false
    },
    principioAtivo: {
        type: String,
        required: true
    },
    restricao: {
        type: Boolean,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    status: {
        type:Boolean,
        required: true
    }

})

export const Produto = mongoose.model<Produto>('Produto', produtoSchema);