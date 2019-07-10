import { Server } from './server/server';
import { ClienteRotas } from './cliente/cliente.route';
import { EstoqueRotas } from './estoque/estoque.route';
import { FornecedorRotas } from './fornecedor/fornecedor.route';
import { FuncionarioRotas } from './funcionario/funcionario.route'
import { LaboratorioRotas } from './laboratorio/laboratorio.routes';
import { ProdutoRotas } from './produto/produto.route';
import { RelatorioVendaRotas } from './relatorio/relatoriovenda.route';
import { VendaRotas } from './venda/venda.route';
import { LoginRoutes } from './login/login.route';

const server: Server = new Server;

server.bootstrap([ClienteRotas, EstoqueRotas, FornecedorRotas, FuncionarioRotas, LaboratorioRotas, ProdutoRotas, RelatorioVendaRotas, VendaRotas, LoginRoutes]).then(server => {
    console.log(`Servidor executando na porta: ${server.application.address().port}[]`)
}).catch(error => {
    console.log("Servidor não inicializou!")
    console.log(error)
    process.exit(1)
})




