import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { GradeComponent } from './componentes/grade/grade.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'lista', component: ListaComponent},
  {path:'grade', component: GradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
