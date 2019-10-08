import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtrocomponenteComponent } from './otrocomponente/otrocomponente.component';
import { CiclodevidaComponent } from './ciclodevida/ciclodevida.component';


const routes: Routes = [
  { path: "", redirectTo: "/ciclodevida", pathMatch: "full" },
  { path: "ciclodevida", component: CiclodevidaComponent },
  { path: "otroComponente", component: OtrocomponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
