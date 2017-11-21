import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';
// declare var $ :any;


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(() => {
      $('.button-collapse').sideNav();
    });

  }

}
