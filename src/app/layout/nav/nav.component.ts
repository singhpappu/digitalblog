import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog/blog.service';
import { category } from '../../blog/blog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public category : any = [];
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.blogService.getCategory().then((response:any) => {
      this.category = response;
    }).catch();
  }

}
