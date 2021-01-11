import { AllStudentComponent } from './all-student/all-student.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'getall', component: AllStudentComponent},
  { path: '', redirectTo: 'getall', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
