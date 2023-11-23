import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Tasks/day2/home/home.component';
import { FormComponent } from './Tasks/day3/form/form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
