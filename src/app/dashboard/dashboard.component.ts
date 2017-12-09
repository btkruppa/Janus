import { Component, OnInit } from '@angular/core';
import { App } from '../entities/app';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  apps: Array<App> = environment.apps;
  constructor() { }

  ngOnInit() {

  }

}
