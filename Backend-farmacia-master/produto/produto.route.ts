import * as restify from 'restify';
import { Produto } from './prouto.model';
import { Routes } from '../routes/routes'


class produtoRotas extends Routes {
    applyRouter(application: restify.Server) {
        application.get('/produto', (req, resp, next) => {
            Produto.find().then(produto => {
                resp.json(produto)
                return next();
            })
        })

        application.get('/produto/:id', (req, resp, next) => {
            Produto.findOne({ '_id': req.params.id})
                    .populate('lab')
                    .then(produto => {
                        resp.json(produto)
                        return next();
                    })
        })

        application.post('/produto', (req, resp, next) => {
            let produto = new Produto(req.body);

            produto.save().then(produto => {
                resp.json(produto);
            }, error => {
                console.log(error);
            })
            return next();
        })

        application.del('/produto/:id', (req, resp, next) => {
            Produto.remove({ _id: req.params.id }).exec().then((result: any) => {
                if (result.n) {
                    resp.send(200);
                }
                else {
                    resp.send(404);
                }
            })
            return next();
        })

        application.patch('/produto/:id', (req, resp, next) => {
            Produto.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(produto => {
                resp.json(produto);
                return next();
            })
        })


    }


}

export const ProdutoRotas = new produtoRotas();