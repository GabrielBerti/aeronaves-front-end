import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AeronaveListComponent } from './aeronave-list/aeronave-list.component';
import { AddAeronaveComponent } from './add-aeronave/add-aeronave.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-aeronave', pathMatch: 'full' },
  { path: 'view-aeronave', component: AeronaveListComponent },
  { path: 'add-aeronave', component: AddAeronaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
