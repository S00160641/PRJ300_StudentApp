import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DiaryComponent } from './diary/diary.component';
import { EventsComponent } from './events/events.component';
import { SocialComponent } from './social/social.component';
import { TimetableComponent } from './timetable/timetable.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DiaryComponent,
    EventsComponent,
    SocialComponent,
    TimetableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
