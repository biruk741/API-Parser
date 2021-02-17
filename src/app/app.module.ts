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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './smaller-components/search-box/search-box.component';
import { MethodCreatorComponent } from './method-creator/method-creator.component';
import { ParameterListItemComponent } from './method-creator/parameter-list-item/parameter-list-item.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { FooterComponent } from './smaller-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatorComponent,
    DisplayerComponent,
    EntryListItemComponent,
    DisplayListItemComponent,
    ContentComponent,
    ContentTwoComponent,
    SearchBoxComponent,
    MethodCreatorComponent,
    ParameterListItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
