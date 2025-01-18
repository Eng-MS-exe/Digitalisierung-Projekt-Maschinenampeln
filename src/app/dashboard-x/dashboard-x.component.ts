//Import Modules

import { NgFor, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-x',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './dashboard-x.component.html',
  styleUrls: ['./dashboard-x.component.scss'],
})
export class DashboardXComponent {

  constructor(public ds: DashboardService, private router: Router) {}

  @Output() toggleEvent = new EventEmitter<{ id: number, title: string }>();


  //open new Tab with selected Dashboard
  showDashboardDetail(dashboardId: number) {
    // Erstelle die URL mit der ID des Dashboards
    const url = `/dashboard/${dashboardId}`;
    window.open(url, '_blank');
  }


  //change variable to show Editor
  onToggleDashboardID(dashboardId: number, dashboardTitle: string) {
    this.toggleEvent.emit({ id: dashboardId, title: dashboardTitle });
  }
}
