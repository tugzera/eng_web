import * as restify from 'restify';
import { Laboratorio } from './laboratorio.model';
import { Routes } from '../routes/routes'


class laboratorioRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/laboratorio', (req, resp, next) => {
            Laboratorio.find().then(laboratorio => {
                resp.json(laboratorio)
                return next();
            })
        })

        application.get('/laboratorio/:id', (req, resp, next) => {
            Laboratorio.findById(req.params.id).then(laboratorio => {
                resp.json(laboratorio)
                return next();
            })
        })

        application.post('/laboratorio', (req, resp, next) => {
            let laboratorio = new Laboratorio(req.body);

            laboratorio.save().then(laboratorio => {
                resp.json(laboratorio);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/laboratorio/:id', (req, resp, next) => {
            Laboratorio.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/laboratorio/:id', (req, resp, next) => {
            Laboratorio.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(laboratorio => {
                resp.json(laboratorio);
                return next();
            })
        })


    }


}

export const LaboratorioRotas = new laboratorioRotas();