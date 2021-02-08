import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {BookPageComponent} from './book-page/book-page.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: '', component: BookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
