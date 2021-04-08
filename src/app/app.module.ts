import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import {MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AddValuePipe } from './add-value.pipe';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from "@angular/material/card";
import { HomeworkComponent } from './homework/homework.component';
import { HyphenStringPipe } from './hyphen-string.pipe';
import { HighlightBoldDirective } from './highlight-bold.directive';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    AddValuePipe,
    FilterComponent,
    HomeworkComponent,
    HyphenStringPipe,
    HighlightBoldDirective,
    HomeComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
