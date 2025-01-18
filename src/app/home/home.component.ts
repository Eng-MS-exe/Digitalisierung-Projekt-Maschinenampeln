//Import Modules

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardXComponent } from '../dashboard-x/dashboard-x.component';
import { NeuesDashboardComponent } from '../neues-dashboard/neues-dashboard.component';
import { DashboardEditorComponent } from '../dashboard-editor/dashboard-editor.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DashboardXComponent, NeuesDashboardComponent, DashboardEditorComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Stihl-Projekt';
  showDashboardlist = true;
  showDashboardEditor = false;
  activeId = -1;
  headerText = 'Welcome to Stihl Machine-Overview';

  //update Dashboardid
  toggleDashboardID(event: { id: number; title: string }) {
    this.activeId = event.id;
    this.updateDashboardVisibility();
    this.updateHeaderText(event.title);
  }

  //return to Dashboardoverview
  goback() {
    this.activeId = -1;
    this.updateDashboardVisibility();
    this.updateHeaderText('');
  }

  //update visibilitys of Overview and Editor
  private updateDashboardVisibility(): void {
    this.showDashboardlist = this.activeId === -1;
    this.showDashboardEditor = this.activeId !== -1;
  }

  //update text in Header
  private updateHeaderText(dashboardtitle: string): void {
    this.headerText = this.activeId === -1 ? 'Welcome to Stihl Machine-Overview' : `Dashboard ${dashboardtitle} wird bearbeitet...`;
  }
}
