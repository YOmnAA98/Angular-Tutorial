import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Tasks/day2/home/home.component';
import { SidebarComponent } from './Tasks/day2/sidebar/sidebar.component';
import { NavbarComponent } from './Tasks/day2/navbar/navbar.component';
import { CourseComponent } from './Tasks/day2/course/course.component';
import { FormComponent } from './Tasks/day3/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    CourseComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
