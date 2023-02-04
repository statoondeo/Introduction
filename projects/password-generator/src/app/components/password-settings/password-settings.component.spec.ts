import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Settings } from '../../types';

import { PasswordSettingsComponent } from './password-settings.component';

@Component({
  selector: 'test',
  template: `<password-settings
        (settings-change)="onSettingsChange($event)"
          />`,
})
class ChangeTestComponent {
  onSettingsChange(settings: Settings) {}
}
@Component({
  selector: 'test',
  template: `<password-settings
        [default-settings]="{length:32, uppercases:true,numbers:true, symbols:true}"
          />`,
})
class DefaultTestComponent {
  onSettingsChange(settings: Settings) {}
}
describe('PasswordSettingsComponent', () => {
  let component: ChangeTestComponent;
  let fixture: ComponentFixture<ChangeTestComponent>;

  it('should have default values', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, ChangeTestComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    await fixture.whenStable();
    // Arrange
    // Act
    // Assert
    expect(fixture.nativeElement.querySelector('#length').value).toBe('20');
    expect(
      fixture.nativeElement.querySelector('#uppercases').checked
    ).toBeFalse();
    expect(fixture.nativeElement.querySelector('#numbers').checked).toBeFalse();
    expect(fixture.nativeElement.querySelector('#symbols').checked).toBeFalse();
  });
  it('should have inpuy values', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, DefaultTestComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    await fixture.whenStable();
    // Arrange
    // Act
    // Assert
    expect(fixture.nativeElement.querySelector('#length').value).toBe('32');
    expect(
      fixture.nativeElement.querySelector('#uppercases').checked
    ).toBeTrue();
    expect(fixture.nativeElement.querySelector('#numbers').checked).toBeTrue();
    expect(fixture.nativeElement.querySelector('#symbols').checked).toBeTrue();
  });
  it('should emit event when length setting change', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, ChangeTestComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    // Arrange
    const spy = spyOn(component, 'onSettingsChange');
    const element = fixture.nativeElement.querySelector('#length');
    // Act
    element.value = 32;
    element.dispatchEvent(new Event('input'));
    // Assert
    expect(spy).toHaveBeenCalledWith({
      length: 32,
      uppercases: false,
      numbers: false,
      symbols: false,
    });
  });
  it('should emit event when uppercases setting change', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, ChangeTestComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    // Arrange
    const spy = spyOn(component, 'onSettingsChange');
    const element = fixture.nativeElement.querySelector('#uppercases');
    // Act
    element.click();
    // Assert
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercases: true,
      numbers: false,
      symbols: false,
    });
  });
  it('should emit event when numbers setting change', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, ChangeTestComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    // Arrange
    const spy = spyOn(component, 'onSettingsChange');
    const element = fixture.nativeElement.querySelector('#numbers');
    // Act
    element.click();
    // Assert
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercases: false,
      numbers: true,
      symbols: false,
    });
  });
  it('should emit event when symbols setting change', async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordSettingsComponent, ChangeTestComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    // Arrange
    const spy = spyOn(component, 'onSettingsChange');
    const element = fixture.nativeElement.querySelector('#symbols');
    // Act
    element.click();
    // Assert
    expect(spy).toHaveBeenCalledWith({
      length: 20,
      uppercases: false,
      numbers: false,
      symbols: true,
    });
  });
});
