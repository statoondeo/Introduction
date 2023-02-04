import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

let component: CounterComponent;
let fixture: ComponentFixture<CounterComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [CounterComponent],
  });
  fixture = TestBed.createComponent(CounterComponent);
  component = fixture.componentInstance;

  it(`default step should be 1`, () => {
    expect(component.step).toBe(1);
  });
  it(`default value should be 0`, () => {
    expect(component.count).toBe(0);
  });
  it(`input step should be 12`, () => {
    component.step = 12;
    fixture.detectChanges();
    expect(component.step).toBe(12);
  });
  it(`input value should be 7`, () => {
    component.count = 7;
    fixture.detectChanges();
    expect(component.count).toBe(7);
  });
  it(`incremented value should be 19`, () => {
    component.count = 7;
    component.step = 12;
    component.addStep();
    expect(component.count).toBe(19);
  });
  it(`decremented value should be 7`, () => {
    component.count = 19;
    component.step = 12;
    component.substractStep();
    expect(component.count).toBe(7);
  });
});
