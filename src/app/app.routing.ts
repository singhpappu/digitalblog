import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './blog/blog.module#BlogModule'
      },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      },
    ]
  },
  

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
