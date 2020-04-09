import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
  {path:'empList', component: EmployeeListComponent},
  {path:'subList', component: SubjectListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
