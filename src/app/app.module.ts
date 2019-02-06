import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Material
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';

// Prime
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
