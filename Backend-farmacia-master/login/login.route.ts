import * as restify from 'restify';
import { Md5 } from 'ts-md5/dist/md5';

import { Routes } from '../routes/routes';
import { Funcionario } from '../funcionario/funcionario.model';

class loginRoutes extends Routes {
    applyRouter(application: restify.Server) {
        application.post('/login', (req, resp, next) => {
            let user = new Funcionario(req.body);
            let myHash1 = <String>Md5.hashStr(<string>user.password)
            user.password = myHash1;

            Funcionario.findOne({ $and: [{ "email": user.email }, { "password": user.password }] })
                .then(user => {
                    if (user != null) {
                        resp.json(user);
                        //console.log(user);
                        return next();
                    }
                }).catch(next);
        })
    }
}

export const LoginRoutes = new loginRoutes();