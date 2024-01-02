import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CharttaskComponent } from './charttask/charttask.component';


const routes: Routes = [{path:"",component:AddtaskComponent},
{path:"task",component:TasklistComponent},
{path:"charttask",component:CharttaskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
