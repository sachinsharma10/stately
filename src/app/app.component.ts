import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as jQuery from 'jquery';// import Jquery here    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'stately';

  ngOnInit(){
   jQuery('.icon').click(function () {
    jQuery('.search').toggleClass('expanded');
  });
  }
}


