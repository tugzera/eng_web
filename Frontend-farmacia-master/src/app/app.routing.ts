import { RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserComponent } from './pages/user/user.component';
import {LabsFormComponent} from "./pages/labs/labs-form/labs-form.component";
import {LabsListComponent} from "./pages/labs/labs-list/labs-list.component";
import { FornecedoresFormComponent } from './pages/fornecedores/fornecedores-form/fornecedores-form.component';
import { FornecedoresListComponent } from './pages/fornecedores/fornecedores-list/fornecedores-list.component';
import { FuncionariosFormComponent } from './pages/funcionarios/funcionarios-form/funcionarios-form.component';
import { FuncionariosListComponent } from './pages/funcionarios/funcionarios-list/funcionarios-list.component';
import { ClientesListComponent } from './pages/clientes/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './pages/clientes/clientes-form/clientes-form.component';
import { ProdutosFormComponent } from './pages/produtos/produtos-form/produtos-form.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';
import { VendasComponent } from './pages/vendas/vendas.component';

const APP_ROUTES = [
  { path: '', component: VendasComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, /*canActivate: [AuthGuardService]*/},
  { path: 'user', component: UserComponent, /*canActivate: [AuthGuardService]*/},
  { path: 'labs/new_record', component: LabsFormComponent },
  { path: 'labs/:id', component: LabsFormComponent },
  { path: 'labs', component: LabsListComponent },
  { path: 'fornecedores/new_record', component: FornecedoresFormComponent },
  { path: 'fornecedores/:id', component: FornecedoresFormComponent },
  { path: 'fornecedores', component: FornecedoresListComponent},
  { path: 'funcionarios/new_record', component: FuncionariosFormComponent },
  { path: 'funcionarios/:id', component: FuncionariosFormComponent },
  { path: 'funcionarios', component: FuncionariosListComponent },
  { path: 'clientes/new_record', component: ClientesFormComponent },
  { path: 'clientes/:id', component: ClientesFormComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'produtos/new_record', component: ProdutosFormComponent },
  { path: 'produtos/:id', component: ProdutosFormComponent },
  { path: 'produtos', component: ProdutosListComponent },
  { path: 'vendas', component: VendasComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
