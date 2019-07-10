class enviroment{
    remoteHost: string =  `mongodb+srv://fabiano99:12345@cluster0-gqq9i.mongodb.net/farmaciadb?retryWrites=true&w=majority`;
    localHost: string = 'mongodb://localhost/farmaciadb';
    port:number = 4000
}

export const Enviroment = new enviroment();