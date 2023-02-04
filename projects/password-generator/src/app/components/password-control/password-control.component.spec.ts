import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordGeneratorModule } from '../../password-generator.module';

@Component({
  selector: 'test',
  template: '<password-control (onGenerate)="onClickGenerate()" />',
})
class TestComponent {
  onClickGenerate() {}
}
describe('PasswordControlComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [PasswordGeneratorModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should emit an event when button is clicked', () => {
    // Arrange
    const spy = spyOn(component, 'onClickGenerate');
    // Act
    fixture.nativeElement.querySelector('button').click();
    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
