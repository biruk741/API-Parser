import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatorComponent } from './creator/creator.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { EntryListItemComponent } from './creator/entry-list-item/entry-list-item.component';
import { DisplayListItemComponent } from './displayer/display-list-item/display-list-item.component';
import { ContentComponent } from './content/content.component';
import { ContentTwoComponent } from './content-two/content-two.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatorComponent,
    DisplayerComponent,
    EntryListItemComponent,
    DisplayListItemComponent,
    ContentComponent,
    ContentTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
