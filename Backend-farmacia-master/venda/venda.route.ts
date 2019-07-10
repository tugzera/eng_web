import * as restify from 'restify';
import { Venda } from './venda.model';
import { Routes } from '../routes/routes'


class vendaRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/venda', (req, resp, next) => {
            Venda.find().then(venda => {
                resp.json(venda)
                return next();
            })
        })

        application.post('/venda', (req, resp, next) => {
            let venda = new Venda(req.body);

            venda.save().then(venda => {
                resp.json(venda);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/venda/:id', (req, resp, next) => {
            Venda.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/venda/:id', (req, resp, next) => {
            Venda.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(venda => {
                resp.json(venda);
                return next();
            })
        })


    }


}

export const VendaRotas = new vendaRotas();