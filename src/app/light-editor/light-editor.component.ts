//Import Modules

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Light, LightService } from '../light.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-light-editor',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  templateUrl: './light-editor.component.html',
  styleUrls: ['./light-editor.component.scss']
})
export class LightEditorComponent {
  @Input() light!: Light;
  @Output() save = new EventEmitter<Light>();
  @Output() cancel = new EventEmitter<void>();

  newColor: string = '';
  colorToEdit: { color: string, status: boolean } | null = null;

  constructor(private lightService: LightService) {}

  //add new light light
  addNewColor(): void {
    if (this.newColor) {
      const light = this.lightService.getLightById(this.light.LightId); // get light ID
      if (light) {
        const maxColorId = Math.max(...light.colors.map(c => c.colorId), 0); // get highest light ID
        const newColorId = maxColorId + 1; // set new light light ID
        light.colors.push({ colorId: newColorId, color: this.newColor, status: false });
        this.newColor = ''; // reset input field
      }
    }
  }

  // edit light light
  editColor(color: { color: string, status: boolean, colorId: number }): void {
    const newColor = prompt('Gib die neue Farbe ein:', color.color);
    if (newColor) {
      const light = this.lightService.getLightById(this.light.LightId); // get light ID
      if (light) {
        const colorToEdit = light.colors.find(c => c.colorId === color.colorId);
        if (colorToEdit) {
          colorToEdit.color = newColor;
        }
      }
    }
  }

  // delete light light
  deleteColor(colorId: number): void {
    const light = this.lightService.getLightById(this.light.LightId);
    if (light) {
      const index = light.colors.findIndex(c => c.colorId === colorId);
      if (index !== -1) {
        light.colors.splice(index, 1); //delete based on light light ID
      }
    }
  }

  // save
  saveChanges(): void {
    console.log('Änderungen gespeichert:', this.light);
    this.save.emit(this.light);
  }

  // cancel
  cancelEdit(): void {
    console.log('Bearbeitung abgebrochen');
    this.cancel.emit();
  }
}