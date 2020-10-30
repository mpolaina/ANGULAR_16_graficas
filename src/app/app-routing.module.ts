import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { FlexComponent } from './components/flex/flex.component';

const routes: Routes = [
  {path: 'linea', component: LineaComponent},
  {path: 'barras', component: BarrasComponent},
  {path: 'flex', component: FlexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
