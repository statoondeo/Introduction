import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input('initial-value')
  count = 0;
  @Input('step')
  step = 1;
  addStep() {
    this.count += this.step;
  }
  substractStep() {
    this.count -= this.step;
    this.count = this.count >= 0 ? this.count : 0;
  }
}
