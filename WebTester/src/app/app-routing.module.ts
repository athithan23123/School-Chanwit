import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


// const routes: Routes = [
//   { path: '', component: InfomeComponent },
//   {path: 'info_hoshi',},
//   {path: 'info_Zynthia',},
//   {path: 'info_Shin',},
//   {path: 'info_Nan',},
//   {path: 'Art_Shin',},
//   {path: 'Art_Nan',},

// ];

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
