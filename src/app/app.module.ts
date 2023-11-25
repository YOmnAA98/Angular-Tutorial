import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Tasks/day2/home/home.component';
import { SidebarComponent } from './Tasks/day2/sidebar/sidebar.component';
import { NavbarComponent } from './Tasks/day2/navbar/navbar.component';
import { CourseComponent } from './Tasks/day2/course/course.component';
import { FormComponent } from './Tasks/day3/form/form.component';
import { BindingComponent } from './Tasks/day4/binding/binding.component';
import { Day5Component } from './Tasks/day5/day5/day5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    CourseComponent,
    FormComponent,
    BindingComponent,
    Day5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
