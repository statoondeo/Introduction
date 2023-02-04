import { Component } from '@angular/core';
import { FeesService } from './Services/fees.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeesService],
})
export class AppComponent {
  pages = 5;
}
