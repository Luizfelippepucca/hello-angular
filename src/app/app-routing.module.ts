import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: CursosDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
