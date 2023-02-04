import { Component } from '@angular/core';
import { Settings } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password?: string;
  settings: Settings = {
    length: 20,
    uppercases: false,
    numbers: false,
    symbols: false,
  };
  get settingsValues() {
    return { ...this.settings };
  }
  onClickGenerate(event: Event) {
    this.password = 'Nouveau mot de passe';
  }
  onSettingsChange(event: Settings) {
    this.settings = event;
  }
}
