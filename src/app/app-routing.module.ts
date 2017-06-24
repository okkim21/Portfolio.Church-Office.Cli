import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { FamilySearchComponent } from 'app/family/family-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'dashboard'},
  { path: 'dashboard', component:DashboardComponent },
  { path: 'families', component:FamilySearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
