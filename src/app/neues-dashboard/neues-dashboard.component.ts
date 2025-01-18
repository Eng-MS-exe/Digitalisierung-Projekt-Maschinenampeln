//Import Modules

import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormsModule } from '@angular/forms';  // Richtig: Nur FormsModule importieren
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-neues-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './neues-dashboard.component.html',
  styleUrl: './neues-dashboard.component.scss'
})
export class NeuesDashboardComponent {

  constructor(public ds: DashboardService){

  }

}
