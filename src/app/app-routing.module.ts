import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: 'update', component: UpdateTaskComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' } // Move this line to the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
