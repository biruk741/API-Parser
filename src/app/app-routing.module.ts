import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentTwoComponent } from './content-two/content-two.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'datatypes',component:ContentComponent},
  {path:'methods',component:ContentTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
