import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfomeComponent } from './infome/infome.component';


const routes: Routes = [
  { path: 'infome', component: InfomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
