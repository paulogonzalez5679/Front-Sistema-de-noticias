import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importacion de componentes
import { VerNoticiasComponent } from './components/ver-noticias/ver-noticias.component';


const routes: Routes = [
  {path: '', component: VerNoticiasComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
