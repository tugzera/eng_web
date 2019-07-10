import mongoose, { Schema } from 'mongoose';

export interface Cliente extends mongoose.Document {
    _id: Object;
    nome: String;
    cpf: String;
    telefone: String;
    sexo: Boolean;
    dataNascimento: Date;
    status: String;
    endereco: {
        rua: String, 
        cep:String,  
        numero: Number, 
        cidade: String, 
        uf: String, 
        complemento: String, 
        bairro: String
    };
    email: String;
}

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false,
        unique: true

    },
    telefone: {
        type: String,
        required: false,
        unique: true
    },
    sexo: {
        type: Boolean,
    },
    dataNascimento: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

})

export const Cliente = mongoose.model<Cliente>('Cliente', clienteSchema);