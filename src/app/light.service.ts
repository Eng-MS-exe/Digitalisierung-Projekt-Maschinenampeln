//Import

import { Injectable } from '@angular/core';

//create and export interface for light
export interface Light {
  LightId: number;
  Lightname: string;
  LURL?: string;
  usedinDashboardId: number;
  position: { x: number; y: number };
  size?: number;
  colors: { colorId: number; color: string; status: boolean }[];
}



@Injectable({
  providedIn: 'root',
})

//temporay declaration of lights (needed if there is no server to show application)
export class LightService {
  Lightlist: Light[] = [
      {
        LightId: 1,
        Lightname: 'Arm 1',
        usedinDashboardId: 1,
        position: { x: 36, y: 20 },
        size: 100,
        colors: [
          { colorId: 1, color: '#FF5733', status: true },
          { colorId: 2, color: '#33FF57', status: false },
          { colorId: 3, color: '#3380FF', status: false },
        ],
      },
      {
        LightId: 2,
        Lightname: 'Distributor 2',
        usedinDashboardId: 1,
        position: { x: 52, y: 59 },
        size: 70,
        colors: [
          { colorId: 1, color: '#FF5733', status: false },
          { colorId: 2, color: '#33FF57', status: true },
          { colorId: 3, color: '#3380FF', status: false },
        ],
      },
      {
        LightId: 3,
        Lightname: 'Förderband',
        usedinDashboardId: 1,
        position: { x: 90, y: 20 },
        size: 200,
        colors: [
          { colorId: 1, color: '#FF5733', status: true },
          { colorId: 2, color: '#33FF57', status: false },
          { colorId: 3, color: '#3380FF', status: true },
          { colorId: 4, color: '#3380FF', status: true }
        ],
      },
      {
        LightId: 4,
        Lightname: 'Ampel 4',
        usedinDashboardId: 2,
        position: { x: 40, y: 25 },
        colors:[
          { colorId: 1, color: '#FF5733', status: false },
          { colorId: 2, color: '#33FF57', status: false },
          { colorId: 3, color: '#3380FF', status: true },
        ],
      },
      {
        LightId: 5,
        Lightname: 'Ampel 5',
        usedinDashboardId: 2,
        position: { x: 50, y: 45 },
        colors: [
          { colorId: 1, color: '#FF5733', status: false },
          { colorId: 2, color: '#33FF57', status: true },
          { colorId: 3, color: '#3380FF', status: false },
        ],
      },
    ];




  constructor() {}

  // methods ---------------------------------------------------------------------------------

  //create new light
  addLight(newLight: Light) {
    this.Lightlist.push(newLight);
  }

  //delete selected light
  deleteLight(lightId: number) {
    const index = this.Lightlist.findIndex(light => light.LightId === lightId);
    if (index !== -1) {
      this.Lightlist.splice(index, 1); // Entfernt die Ampel aus der Liste
    }
  }

  //update light
  updateLight(updatedLight: Light) {
    const index = this.Lightlist.findIndex(light => light.LightId === updatedLight.LightId);
    if (index !== -1) {
      this.Lightlist[index] = updatedLight;
    }
  }


  //toggle light light color
  toggleColor(lightId: number, colorId: number): void {
    const light = this.Lightlist.find((light) => light.LightId === lightId);
    if (light) {
      const colorEntry = light.colors.find((c) => c.colorId === colorId);
      if (colorEntry) {
        colorEntry.status = !colorEntry.status;
      }
    }
  }

  //get all lights
  getLights() {
    return this.Lightlist;
  }

  //get single light
  getLightById(id: number) {
    return this.Lightlist.find(light => light.LightId === id);
  }


}
