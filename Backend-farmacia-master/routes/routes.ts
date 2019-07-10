import * as restify from 'restify'

export abstract class Routes {
    abstract applyRouter( application: restify.Server) : any
}