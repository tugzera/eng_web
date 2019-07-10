import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { AuthService } from './pages/login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './guards/auth-guard.service';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { NavbarUserComponent } from './pages/user/navbar-user/navbar-user.component';
import { NavbarAdminComponent } from './pages/admin/navbar-admin/navbar-admin.component';
import { LabsFormComponent } from './pages/labs/labs-form/labs-form.component';
import { LabsListComponent } from './pages/labs/labs-list/labs-list.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import {MzDropdownModule, MzNavbarModule, MzIconModule, MzInputModule, MzCheckboxModule, MzModalModule, MzButtonModule, MzSwitchModule, MzBadgeModule } from 'ngx-materialize';

import { FornecedoresFormComponent } from './pages/fornecedores/fornecedores-form/fornecedores-form.component';
import { FornecedoresListComponent } from './pages/fornecedores/fornecedores-list/fornecedores-list.component';
import { FornecedoresService } from './pages/fornecedores/fornecedores.service';
import { FuncionariosListComponent } from './pages/funcionarios/funcionarios-list/funcionarios-list.component';
import { FuncionariosFormComponent } from './pages/funcionarios/funcionarios-form/funcionarios-form.component';
import { ClientesListComponent } from './pages/clientes/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './pages/clientes/clientes-form/clientes-form.component';
import { ProdutosFormComponent } from './pages/produtos/produtos-form/produtos-form.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';
import { VendasComponent } from './pages/vendas/vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    NavbarUserComponent,
    NavbarAdminComponent,
    LabsFormComponent,
    LabsListComponent,
    LabsFormComponent,
    HeaderComponent,
    NavComponent,
    FornecedoresFormComponent,
    FornecedoresListComponent,
    FuncionariosListComponent,
    FuncionariosFormComponent,
    ClientesListComponent,
    ClientesFormComponent,
    ProdutosFormComponent,
    ProdutosListComponent,
    VendasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    MzDropdownModule,
    MzNavbarModule,
    MzIconModule,
    MzInputModule,
    MzCheckboxModule,
    MzModalModule,
    MzButtonModule,
    MzSwitchModule,
    MzBadgeModule,
    MzNavbarModule
  ],
  providers: [AuthService, AuthGuardService, FornecedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
