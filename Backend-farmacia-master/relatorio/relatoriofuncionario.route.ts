import * as restify from 'restify';

import { RelatorioFuncionario } from './relatoriofuncionario.model';
import { Routes } from '../routes/routes';

class relatorioFuncionarioRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/relatorioVenda', (req, resp, next) => {
            RelatorioFuncionario.find().then(relatorioFuncionario => {
                resp.json(relatorioFuncionario)
                return next()
            })
        })

        application.post('/relatorioVenda', (req, resp, next) => {
            let relatorioFuncionario = new RelatorioFuncionario(req.body)

            relatorioFuncionario.save().then(funcioario => {
                resp.json(relatorioFuncionario)
            }, error => {
                console.log(error)
            })

            return next()
        })

        application.del('/relatorioFuncionario/:id', (req, resp, next) => {
            RelatorioFuncionario.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/relatorioFuncionario/:id', (req, resp, next) => {
            RelatorioFuncionario.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(relatorioFuncionario => {
                resp.json(relatorioFuncionario)
                return next();
            })
        })

    }





}

export const RelatorioFuncionarioRotas = new relatorioFuncionarioRotas();