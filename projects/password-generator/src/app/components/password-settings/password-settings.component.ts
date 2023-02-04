import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Settings } from '../../types';

@Component({
  selector: 'password-settings',
  templateUrl: './password-settings.component.html',
  styleUrls: ['./password-settings.component.css'],
})
export class PasswordSettingsComponent {
  @Input('default-settings')
  settings: Settings = {
    length: 20,
    uppercases: false,
    numbers: false,
    symbols: false,
  };
  @Output('settings-change')
  onSettingsChangeEvent = new EventEmitter<Settings>();
  onSettingsChange() {
    this.onSettingsChangeEvent.emit({ ...this.settings });
  }
}
