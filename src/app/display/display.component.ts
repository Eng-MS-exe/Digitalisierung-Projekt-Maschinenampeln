//import Modules

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { LightService } from '../light.service';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { LightComponent } from '../light/light.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [NgFor, NgIf, LightComponent, NgStyle], 
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  dashboardId!: number;
  dashboard: any;
  backgroundImage: string = '';
  filteredLights: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private lightService: LightService
  ) {}

  ngOnInit(): void {
    // read Dashboard ID from URL
    this.dashboardId = +this.route.snapshot.paramMap.get('id')!;

    // get chosen Dashboard by ID
    this.dashboard = this.dashboardService.getDashboardById(this.dashboardId);

    // get lights of that Dashboard
    if (this.dashboard) {
      this.filteredLights = this.lightService.getLights().filter(light => light.usedinDashboardId === this.dashboardId);
      this.backgroundImage = this.dashboard.background || '';
    }

    //control logs
    console.log(`Die ID des Dashboards ist: ${this.dashboardId}`);
    console.log(`Das Hintergrundbild ist: ${this.backgroundImage}`);
  }
}
