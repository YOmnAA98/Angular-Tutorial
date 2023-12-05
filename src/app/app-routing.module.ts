import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Tasks/day2/home/home.component';
import { CourseComponent } from './Tasks/day2/course/course.component';
import { FormComponent } from './Tasks/day3/form/form.component';
import { UsersComponent } from './Tasks/day6/users/users.component';
import { Home2Component } from './Tasks/day7/home2/home2.component';
import { DetailsComponent } from './Tasks/day7/details/details.component';

const routes: Routes = [  
  // {path: '', component: HomeComponent},
  {path: '', component: Home2Component},
  {path: 'form', component: FormComponent},
  {path: 'courses', component: CourseComponent},
  {path: 'users', component: UsersComponent},
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
