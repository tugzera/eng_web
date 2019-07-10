import mongoose, { Schema } from 'mongoose';

export interface Venda extends mongoose.Document {
    cliente: Schema.Types.ObjectId;
    funcionario: Schema.Types.ObjectId;
    produto: Schema.Types.ObjectId[];
    qtd: Number[];
    total: Number;
    valor: Number;
    desconto: Number;
    date: Date;
    status: Boolean;
    troca: Schema.Types.ObjectId;

}

export const vendaSchema = new mongoose.Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        required: true
    },
    funcionario: {
        type: Schema.Types.ObjectId,
        required: true
    },
    produto: {
        type: Schema.Types.ObjectId,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    desconto: {
        type: Number
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    troca: {
        type:Schema.Types.ObjectId,
    }
})

export const Venda = mongoose.model<Venda>('Venda', vendaSchema);