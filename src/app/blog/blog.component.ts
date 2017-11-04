import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private blogService : BlogService,
    private router : Router
  ) {}

  ngOnInit() {
    this.getAllBlog();
  }
  public blogs:any = [];
  public blogsGrid:any = [];
  public tempBlog:any = [];
  getAllBlog() {
    this.blogService.getAllBlog().then((response:any) => {
      this.blogs = response.payload;
        while(this.blogs.length) {
          this.blogsGrid.push(this.blogs.splice(0,4));
        }
        
        console.log(this.blogsGrid);
    })
  }
  
  getBlogDetail(blog) {
    this.router.navigate(['story/'+blog.slug]);
    console.log(blog);
  }
}
