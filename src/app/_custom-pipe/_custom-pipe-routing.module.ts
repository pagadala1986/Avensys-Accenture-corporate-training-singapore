import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayCustomPipesComponent } from './display-custom-pipes/display-custom-pipes.component';


const routes: Routes = [
  { path:'',component: DisplayCustomPipesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipeRoutingModule { }
