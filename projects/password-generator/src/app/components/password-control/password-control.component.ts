import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'password-control',
  templateUrl: './password-control.component.html',
  styleUrls: ['./password-control.component.css'],
})
export class PasswordControlComponent {
  @Output('onGenerate')
  onGenerateEvent = new EventEmitter();
  onClickGenerate() {
    this.onGenerateEvent.emit();
  }
}
