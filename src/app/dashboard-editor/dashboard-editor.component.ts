// import Modules

import { Component, Input, Output, EventEmitter, OnInit, NgModule} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { LightComponent } from '../light/light.component';
import { LightService, Light } from '../light.service';
import { DashboardService } from '../dashboard.service';
import { LightEditorComponent } from '../light-editor/light-editor.component';


@Component({
  selector: 'app-dashboard-editor',
  standalone: true,
  imports: [CommonModule, LightComponent, LightEditorComponent],
  templateUrl: './dashboard-editor.component.html',
  styleUrls: ['./dashboard-editor.component.scss']
})

export class DashboardEditorComponent implements OnInit {

  // Input / Output --------------------------------------------------------------------------------
  @Input() activeId!: number;
  @Output() toggleEvent = new EventEmitter<void>();
  
  // declare Variables -----------------------------------------------------------------------------
  selectedLight: Light | null = null;
  filteredLights: Light[] = [];
  dashboard: {Id: number, Title: string, background?: string} | undefined;
  isModalVisible = false; //Light-Editor


  // constructor -----------------------------------------------------------------------------------
  constructor(private ls: LightService, private ds: DashboardService) { }

  // ngOnInit --------------------------------------------------------------------------------------  
  ngOnInit(): void {
    this.filteredLights = this.ls.Lightlist.filter(light => light.usedinDashboardId === this.activeId);
    this.dashboard = this.ds.getDashboardById(this.activeId);
    console.log('Dashboard geladen:', this.dashboard);
  }

  addNewLight() {
    // get highest ID value out of lightlist
    const maxLightId = Math.max(...this.ls.Lightlist.map(light => light.LightId), 0);
  
    const newLight: Light = {
      LightId: maxLightId + 1,  // crate new ID based on highest ID +1
      Lightname: 'Neue Ampel',
      usedinDashboardId: this.activeId,
      position: { x: 100, y: 100 }, // standardposition, editable in application
      size: 100,
      colors: [
        { colorId: 1, color: '#FF5733', status: true },  // red
        { colorId: 2, color: '#33FF57', status: false }, // green
        { colorId: 3, color: '#3380FF', status: true }   // blue
      ]
    };
  
    this.ls.addLight(newLight);
  
    // update lightlist
    this.filteredLights = [...this.filteredLights, newLight]; // add new light
  }

  // edit light
  editLight(light: Light) {
    this.selectedLight = { ...light };
    this.isModalVisible = true;  // show editor
  }

  // save edited light
  saveLight(updatedLight: Light) {
    this.ls.updateLight(updatedLight);  // save light
    this.filteredLights = this.ls.Lightlist.filter(light => light.usedinDashboardId === this.activeId);  // update list
    this.isModalVisible = false;  // close editor
  }

  // close without save
  closeModal() {
    this.isModalVisible = false;
  }

  // delete light
  deleteLight(lightId: number) {
    this.ls.deleteLight(lightId);
    this.filteredLights = this.ls.Lightlist.filter(light => light.usedinDashboardId === this.activeId);
  }

  //choose background
  selectbackground(): void {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    inputElement.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const result = e.target.result;

          if (this.dashboard) {
                       this.dashboard.background = result;
            const dashboardFromService = this.ds.getDashboardById(this.activeId);
            if (dashboardFromService) {
              dashboardFromService.background = result;
            }
          }
        };
          reader.readAsDataURL(file); // Base64 Data URL
      }
    };
      inputElement.click();
  }

  // go back to Dashboardlist
  ongoback() {
    this.toggleEvent.emit();  
  }


}