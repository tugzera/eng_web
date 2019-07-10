import * as restify from 'restify';
import { Fornecedor } from './fornecedor.model';
import { Routes } from '../routes/routes'


class fornecedorRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/fornecedor', (req, resp, next) => {
            Fornecedor.find().then(fornecedor => {
                resp.json(fornecedor)
                return next();
            })
        })

        application.get('/fornecedor/:id', (req, resp, next) => {
            Fornecedor.findById(req.params.id).then(fornecedor => {
                resp.json(fornecedor)
                return next();
            })
        })

        application.post('/fornecedor', (req, resp, next) => {
            let fornecedor = new Fornecedor(req.body);

            fornecedor.save().then(fornecedor => {
                resp.json(fornecedor);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/fornecedor/:id', (req, resp, next) => {
            Fornecedor.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/fornecedor/:id', (req, resp, next) => {
            Fornecedor.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(fornecedor => {
                resp.json(fornecedor);
                return next();
            })
        })


    }


}

export const FornecedorRotas = new fornecedorRotas();