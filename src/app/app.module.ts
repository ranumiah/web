import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
