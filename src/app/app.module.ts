import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {CreateGroupComponent} from './create-group/create-group.component';
import {CreateTaskComponent} from './create-task/create-task.component';
import {GroupComponent} from './group/group.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {TaskComponent} from './task/task.component';
import {RouterModule, Routes} from '@angular/router';
import {TemplatesComponent} from './templates/templates.component';
import {PublishComponent} from './publish/publish.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdInputModule,
  MdSelectModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import {EventsComponent} from './events/events.component';
import {EventsService} from './events.service';
import {MarkdownModule} from 'angular2-markdown';

declare const require;
require('style-loader!../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css');
require('style-loader!../../node_modules/prismjs/themes/prism-okaidia.css');


const firebaseConfig = {
  apiKey: 'AIzaSyA-57paMR3-pz2Ufco-x09gV-9LMwB-6MQ',
  authDomain: 'meetup-organizer.firebaseapp.com',
  databaseURL: 'https://meetup-organizer.firebaseio.com',
  projectId: 'meetup-organizer'
};


const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'templates/:id',
    component: TemplatesComponent
  },
  {
    path: 'publish',
    component: PublishComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/:id',
    component: EventsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateGroupComponent,
    CreateTaskComponent,
    GroupComponent,
    TaskComponent,
    TemplatesComponent,
    PublishComponent,
    EventsComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    MdCardModule,
    MdChipsModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase, AngularFireAuth, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
