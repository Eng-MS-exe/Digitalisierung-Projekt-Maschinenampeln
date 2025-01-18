//Import Modules

import { Component, Input, OnInit } from '@angular/core';
import { LightService, Light } from '../light.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {
  @Input() lights: Light[] = [];

  constructor(private lightService: LightService) {}

  // control log
  ngOnInit(): void {
    if (this.lights.length === 0) {
      console.warn('Es wurden keine Lampen übergeben!');
    }
  }

  // toggle lightcolor via lightservice
  toggleLightColor(lightId: number, colorId: number): void {
    this.lightService.toggleColor(lightId, colorId);
  }
}