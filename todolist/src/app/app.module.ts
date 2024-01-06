import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './componentes/form/form.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { GradeComponent } from './componentes/grade/grade.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaComponent,
    GradeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }