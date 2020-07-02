import { Component, OnInit } from '@angular/core';
declare var createPieChart:any;
declare var createArea:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project192A';
  constructor(){}
  ngOnInit(){
    new createPieChart();
    new createArea();
  }
}
