import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationComponent } from './declaration.component';

describe('DeclarationComponent', () => {
  let component: DeclarationComponent;
  let fixture: ComponentFixture<DeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeclarationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeclarationComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shows fees result', () => {
    // Arrange
    const element = fixture.nativeElement.querySelector('button');
    element.value = '1000';
    // Act
    element.click();
    // Assert
    expect(fixture.nativeElement.querySelector('span').textContent).toBe('150');
  });
});
