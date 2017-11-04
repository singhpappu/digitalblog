import { BlogService } from './blog/blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogModule } from './blog/blog.module';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app.routing';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BlogModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
