import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';
// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Material
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [TasksComponent]
})
export class Tasksmodule { }
