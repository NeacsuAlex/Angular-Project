import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';

const routes: Routes = [ 
{path:'home',component :HomeComponent, pathMatch:'full'},
{path:'addNote',component:AddNoteComponent},
{path:'homework/:id',component:HomeworkComponent},
{path:'editNote',component:EditNoteComponent},
{path:'**', redirectTo:'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
