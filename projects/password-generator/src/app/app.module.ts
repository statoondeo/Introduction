import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordDisplayComponent } from './components/password-display/password-display.component';
import { PasswordSettingsComponent } from './components/password-settings/password-settings.component';
import { PasswordControlComponent } from './components/password-control/password-control.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordDisplayComponent,
    PasswordSettingsComponent,
    PasswordControlComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
