import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  @Input('title')
  title: string = 'Inscription à la newsletter';
  @Input('button-text')
  buttonText: string = "S'inscrire";
  @Input('placeholder')
  placeholder: string = 'Adresse mail';
  @Output('onConfirm')
  onConfirmEvent = new EventEmitter<string>();
  onConfirmNewsletter(mail: string) {
    console.log('Depuis intérieur du composant');
    this.onConfirmEvent.emit(mail);
  }
}
