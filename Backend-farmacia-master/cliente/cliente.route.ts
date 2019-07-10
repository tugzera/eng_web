import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5';

import { Cliente } from './cliente.model';
import { Routes } from '../routes/routes'


class clienteRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/cliente', (req, resp, next) => {
            Cliente.find().then(cliente => {
                resp.json(cliente)
                return next();
            })
        })

        application.get('/cliente/:id', (req, resp, next) => {
            Cliente.findById(req.params.id).then(cliente => {
                resp.json(cliente)
                return next();
            })
        })

        application.post('/cliente', (req, resp, next) => {
            let user = new Cliente(req.body);
            user.save().then(user => {
                resp.json(user);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/cliente/:id', (req, resp, next) => {
            Cliente.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(204);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/cliente/:id', (req, resp, next) => {
            Cliente.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(cliente => {
                resp.json(cliente);
                return next();
            })
        })


    }


}

export const ClienteRotas = new clienteRotas();