import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatesComponent } from './states/states.component';
import { TopicsComponent } from './topics/topics.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'states', component: StatesComponent },
  { path: 'topics', component: TopicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
