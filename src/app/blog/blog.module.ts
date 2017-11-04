import { BannerComponent } from '../pages/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog.routing';
import { BlogDetailModule } from './blog-detail/blog-detail.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
  declarations: [BlogComponent, BlogDetailComponent,BannerComponent]
})
export class BlogModule { }
