import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})

export class DashboardPage implements OnInit {

  private data = null;
  readonly _dbService = null;

  constructor(private apiService: ApiService) { }


  ngOnInit() {

  }

}
