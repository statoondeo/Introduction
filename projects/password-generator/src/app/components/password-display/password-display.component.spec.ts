import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDisplayComponent } from './password-display.component';

@Component({
  selector: 'test',
  template: '<password-display />',
})
class EmptyTestComponent {}
@Component({
  selector: 'test',
  template: '<password-display password="MOCK_PASSWORD" />',
})
class FeededTestComponent {
  @Input()
  password?: string;
}
describe('PasswordDisplayComponent', () => {
  it('should display the input message', async () => {
    // Arrange
    let component: EmptyTestComponent;
    let fixture: ComponentFixture<EmptyTestComponent>;
    let element: HTMLElement;
    await TestBed.configureTestingModule({
      declarations: [EmptyTestComponent, PasswordDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    await fixture.whenStable();
    element = fixture.nativeElement.querySelector('article');
    // Act
    // Assert
    expect(element.textContent).toBe('Cliquez sur le bouton "Générer"');
  });
  it('should display the password', async () => {
    // Arrange
    let component: FeededTestComponent;
    let fixture: ComponentFixture<FeededTestComponent>;
    let element: HTMLElement;
    await TestBed.configureTestingModule({
      declarations: [FeededTestComponent, PasswordDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeededTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    await fixture.whenStable();
    element = fixture.nativeElement.querySelector('article');
    // Act
    // Assert
    expect(element.textContent).toBe('MOCK_PASSWORD');
  });
});
