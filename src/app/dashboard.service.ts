//Import

import {Injectable } from '@angular/core';
import { LightService } from './light.service';


//create and export interface for Dashboards
export interface Dashboard {
  Id: number;
  Title: string;
  URl?: string;
  background?:string;
}

@Injectable({
  providedIn: 'root'
})

//temporay declaration of Dashboard (needed if there is no server to show application)
export class DashboardService {
  Dashboardlist:{Id: number, Title:string, background?:string}[]=[
    {Id:1, Title:'Gusshalle 1',background:'/assets/img/Halle2.jpeg'},
    {Id:2, Title:'Gusshalle 2',background:''},
    {Id:3, Title:'Pressenhalle',background:''},
    {Id:4, Title:'Pausenraum',background:''},
    {Id:5, Title:'Lager',background:''}
  ]
  Idcount: number= this.Dashboardlist.length;


  //Variables for the Inputbox
  showInput = false;
  userInput = ''; 

  constructor(private ls: LightService) { }

  //create new Dashboard
  createDashboard(dashboardtitle: string) {
    const maxId = this.Dashboardlist.length > 0 ? Math.max(...this.Dashboardlist.map(d => d.Id)) : 0;
    const newId = maxId + 1;
  
    this.Dashboardlist.push({ Id: newId, Title: dashboardtitle });
  }


  //delete chosen dashboard
  deleteDashboard(dashboardId: number) {
    this.Dashboardlist = this.Dashboardlist.filter(Dashboard => Dashboard.Id !== dashboardId);
    this.ls.Lightlist = this.ls.Lightlist.filter(light => light.usedinDashboardId !== dashboardId);
  }

  //show input field
  toggleInput() {
    this.showInput = !this.showInput;
  }
  

  // sumit input and create new dashboard
  submitInput() {
    console.log('Eingegebener Text:', this.userInput);
      this.Idcount++;
      this.Dashboardlist.push({Id: this.Idcount, Title:this.userInput});
    this.showInput = false; 
  }

   // get dashboard by id
   getDashboardById(id: number) {
    return this.Dashboardlist.find(dashboard => dashboard.Id === id);
  }


}





