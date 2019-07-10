import * as restify from 'restify'
import { Routes } from '../routes/routes'
import { Funcionario } from '../funcionario/funcionario.model';

class funcionarioRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/funcionario', (req, resp, next) => {
            Funcionario.find().then(funcionario => {
                resp.json(funcionario)
                return next()
            })
        })

        application.get('/funcionario/:id', (req, resp, next) => {
            Funcionario.findById(req.params.id).then(funcionario => {
                resp.json(funcionario)
                return next()
            })
        })

        application.post('/funcionario', (req, resp, next) => {
            let funcionario = new Funcionario(req.body)

            funcionario.save().then(funcioario => {
                resp.json(funcionario)
            }, error => {
                console.log(error)
            })

            return next()
        })

        application.del('/funcionario/:id', (req, resp, next) => {
            Funcionario.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
                return next();
            })
        })

        application.patch('/funcionario/:id', (req, resp, next) => {
            Funcionario.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(funcionario => {
                resp.json(funcionario)
                return next();
            })
        })

    }





}

export const FuncionarioRotas = new funcionarioRotas();