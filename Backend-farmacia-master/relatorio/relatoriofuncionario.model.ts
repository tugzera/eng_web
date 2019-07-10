import mongoose, { Schema } from 'mongoose';

export interface RelatorioFuncionario extends mongoose.Document {
    funcionario: Schema.Types.ObjectId;
    vendas: Schema.Types.ObjectId[];
    data: Date;
}

export const relatoriofuncionarioSchmea = new mongoose.Schema({
    funcionario: {
        type: Schema.Types.ObjectId,
        default: undefined,
        required: true
    },
    vendas: {
        type: [Schema.Types.ObjectId],
        default: undefined,
        required: true
    },
    data: {
        type: Date,
        required: true
    }

})

export const RelatorioFuncionario = mongoose.model<RelatorioFuncionario>('RelatorioFuncionario', relatoriofuncionarioSchmea);