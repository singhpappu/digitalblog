import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() {
    $("#slider3").responsiveSlides({
      auto: true,
      pager: true,
      nav: true,
      speed: 500,
      namespace: "callbacks",
      before: function() {
          $('.events').append("<li>before event fired.</li>");
      },
      after: function() {
          $('.events').append("<li>after event fired.</li>");
      }
  });
   }

  ngOnInit() {
  }

}
