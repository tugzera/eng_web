import * as restify from 'restify';
import { Estoque } from './estoque.model';
import { Routes } from '../routes/routes'

class estoqueRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/estoque', (req, resp, next) => {
            Estoque.find().then(estoque => {
                resp.json(estoque);
                return next();
            })
        })

        application.post('/estoque', (req, resp, next) => {
            let estoque = new Estoque(req.body);

            estoque.save().then(estoque => {
                resp.json(estoque);

            }, error => {
                console.log(error);

            })
            return next();
        })

        application.del('/estoque/:id', (req, resp, next) => {
            Estoque.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    return (200);
                }
                else {
                    return (404);
                }
                return next();
            })
        })

        application.patch('/estoque/:id', (req, resp, next) => {
            Estoque.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(estoque => {
                resp.json(estoque);
                return next();
            })
        })


    }
}

export const EstoqueRotas = new estoqueRotas();