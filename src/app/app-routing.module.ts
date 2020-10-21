import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StatesComponent } from './admin/states/states.component';
import { TopicsComponent } from './admin/topics/topics.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { SitelayoutComponent } from './layouts/sitelayout/sitelayout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DiversityComponent } from './site/diversity/diversity.component';
import { InsightsComponent } from './site/insights/insights.component';
import { LocationsComponent } from './site/locations/locations.component';
import { PeopleComponent } from './site/people/people.component';
import { ResourcesComponent } from './site/resources/resources.component';
import { SolutionsComponent } from './site/solutions/solutions.component';
import { WebinarsComponent } from './site/webinars/webinars.component';



const routes: Routes = [
  // Site routes goes here
  {
    path: '', component: SitelayoutComponent,
    children: [
      { path: '', component: ResourcesComponent },
      { path: 'insights-podcast', component: InsightsComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'solutions', component: SolutionsComponent },
      { path: 'diversity', component: DiversityComponent },
      { path: 'webinars', component: WebinarsComponent }
    ]
  },

  // Admin routes goes here
  {
    path: '', component: AdminlayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'states', component: StatesComponent },
      { path: 'topics', component: TopicsComponent }
    ]
  },

  // no layout routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
