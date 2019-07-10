import mongoose, { Schema } from 'mongoose';

export interface Fornecedor extends mongoose.Document {
    nome: String;
    razaoSocial: String;
    endereco: {
        rua: String, 
        cep:String,  
        numero: Number, 
        cidade: String, 
        uf: String, 
        complemento: String, 
        bairro: String
    };
    telefone: String;
    email: String;
    status: Boolean;
    cnpj: String;

}

export const fornecedorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    razaoSocial: {
        type: String,
        required: true,
        unique: true
    },
    endereco: {
        type: Object,
        required: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    email: {    
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    }
})

export const Fornecedor = mongoose.model<Fornecedor>('Fornecedor', fornecedorSchema);