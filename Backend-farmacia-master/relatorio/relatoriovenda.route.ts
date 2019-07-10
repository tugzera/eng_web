import * as restify from 'restify';
import { RelatorioVenda } from './relatoriovenda.model';
import { Routes } from '../routes/routes';

class relatorioVendaRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/relatorioVenda', (req, resp, next) => {
            RelatorioVenda.find().then(relatorioVenda => {
                resp.json(relatorioVenda)
                return next()
            })
        })

        application.post('/relatorioVenda', (req, resp, next) => {
            let relatorioVenda = new RelatorioVenda(req.body)

            relatorioVenda.save().then(funcioario => {
                resp.json(relatorioVenda)
            }, error => {
                console.log(error)
            })

            return next()
        })

        application.del('/relatorioVenda/:id', (req, resp, next) => {
            RelatorioVenda.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/relatorioVenda/:id', (req, resp, next) => {
            RelatorioVenda.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(relatorioVenda => {
                resp.json(relatorioVenda)
                return next();
            })
        })

    }





}

export const RelatorioVendaRotas = new relatorioVendaRotas();