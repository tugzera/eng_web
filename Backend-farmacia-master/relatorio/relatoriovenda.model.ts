import mongoose, { Schema } from 'mongoose';

export interface RelatorioVenda extends mongoose.Document {
    produto: Schema.Types.ObjectId[];
    qtd: Number[];
    valor: Number[];
    qtdTotal: Number;
    valorTotal: Number;
}

export const relatoriovendaSchema = new mongoose.Schema({
    produto: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    qtd: {
        type: [Number],
        default: undefined,
        required: true
    },
    valor: {
        type: [Number],
        default: undefined,
        required: true
    },
    qtdTotal: {
        type: Number,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    }
})

export const RelatorioVenda = mongoose.model<RelatorioVenda>('RelatorioVenda', relatoriovendaSchema);