



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { PeopleComponent } from './site/people/people.component';
import { LocationsComponent } from './site/locations/locations.component';
import { InsightsComponent } from './site/insights/insights.component';
import { WebinarsComponent } from './site/webinars/webinars.component';
import { SolutionsComponent } from './site/solutions/solutions.component';
import { DiversityComponent } from './site/diversity/diversity.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SitelayoutComponent } from './layouts/sitelayout/sitelayout.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { ResourcesComponent } from './site/resources/resources.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StatesComponent } from './admin/states/states.component';
import { TopicsComponent } from './admin/topics/topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    LocationsComponent,
    InsightsComponent,
    WebinarsComponent,
    SolutionsComponent,
    DiversityComponent,
    LoginComponent,
    SignupComponent,
    SitelayoutComponent,
    AdminlayoutComponent,
    ResourcesComponent,
    DashboardComponent,
    StatesComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
