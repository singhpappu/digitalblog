import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    console.log("activatedRoute",this.activatedRoute.snapshot.params.slug);
    this.getBlogBySlug(this.activatedRoute.snapshot.params.slug);
  }

  public blog : any = {};
  public category: any [];
  getBlogBySlug(slug) {
    this.blogService.getBlogBySlug(slug).then((response:any) => {
      this.blog = response.payload;
      this.getCategory();
    }).catch(error=> {

    });
  }

  getCategory() {
    this.blogService.getCategory().then((response:any) => {
      this.category = response;
    }).catch();
  }

}
