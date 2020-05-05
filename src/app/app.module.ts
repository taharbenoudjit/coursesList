import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
