import mongoose, { Schema } from 'mongoose';

export interface Estoque extends mongoose.Document {
    _id: Object;
    produto: Schema.Types.ObjectId[];
    qtd: Number[];
    qtdTotal: Number;
    valorTotal: Number;
}

export const estoqueSchema = new mongoose.Schema({
    produto: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: true

    },
    qtd: {
        type: Number,
        required: true
    },
    qtdTotal: {
        type:Number,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    }
})

export const Estoque = mongoose.model<Estoque>('Estoque', estoqueSchema);