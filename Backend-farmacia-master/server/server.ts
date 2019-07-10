import * as restify from 'restify';
import { Routes } from '../routes/routes';
import corsMiddleware from 'restify-cors-middleware'
import { handleError } from './error';
import { Enviroment } from '../routes/enviroment';
import mongoose from 'mongoose'

export class Server { 
    application: restify.Server = restify.createServer({
        name: "Farmacia Server",
        version: "1.0"
    })

    initializeDb():any{
        (<any> mongoose).Promise = global.Promise; //campo obrigatorio
        return mongoose.connect(Enviroment.remoteHost)
    }

    inicializarRotas(routers:Routes[]):Promise<any>{
        return new Promise((resolve, reject)  =>{ 
            try{
                const corsOptions: corsMiddleware.Options = {
                    preflightMaxAge: 86400,
                    origins: ['*'],
                    allowHeaders: ['authorization'],
                    exposeHeaders: ['x-custom-header']  
                  }
                const cors: corsMiddleware.CorsMiddleware = corsMiddleware(corsOptions)
          
                this.application.pre(cors.preflight)
                this.application.use(cors.actual)
                this.application.use(restify.plugins.queryParser())//geralmente utilizando no get para converter pesquisas
                this.application.use(restify.plugins.bodyParser())// convert json em object automaticamente
            
                for( let router of routers){
                    router.applyRouter(this.application)
                }
    
    
                this.application.listen(Enviroment.port, () =>{
                    resolve(this.application)
                })
    
                this.application.on('restifyError',handleError)
            }catch(err){    
                reject(err)
            }
        });
    } 
    bootstrap(routers: Routes[] = []):Promise<Server>{ //inicializa
        return this.initializeDb().then( 
            () =>  this.inicializarRotas(routers).then( 
            () => this) )
        
     }

}

