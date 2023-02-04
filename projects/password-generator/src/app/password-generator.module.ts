import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordControlComponent } from './components/password-control/password-control.component';
import { PasswordDisplayComponent } from './components/password-display/password-display.component';
import { PasswordSettingsComponent } from './components/password-settings/password-settings.component';
import { PasswordGeneratorService } from './components/Services/passwordgenerator.service';

@NgModule({
  declarations: [
    PasswordDisplayComponent,
    PasswordSettingsComponent,
    PasswordControlComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    PasswordDisplayComponent,
    PasswordSettingsComponent,
    PasswordControlComponent,
  ],
  providers: [PasswordGeneratorService],
})
export class PasswordGeneratorModule {}
