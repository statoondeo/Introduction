import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordControlComponent } from './components/password-control/password-control.component';
import { PasswordDisplayComponent } from './components/password-display/password-display.component';
import { PasswordSettingsComponent } from './components/password-settings/password-settings.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PasswordControlComponent,
        PasswordDisplayComponent,
        PasswordSettingsComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it('should be "Générez un mot de passe fort!"', () => {
    // Arrange
    // Act
    // Assert
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toBe(
      'Générez un mot de passe fort!'
    );
  });

  it('should be "Nouveau mot de passe" when "Générer" button is clicked', () => {
    // Arrange
    // Act
    fixture.nativeElement.querySelector('button').click();
    // Assert
    expect(fixture.nativeElement.querySelector('article')?.textContent).toBe(
      'Nouveau mot de passe'
    );
  });

  it('should settings initial values be 20/false/false/false', () => {
    // Arrange
    // Act
    // Assert
    expect(component.settings.length).toBe(20);
    expect(component.settings.uppercases).toBe(false);
    expect(component.settings.numbers).toBe(false);
    expect(component.settings.symbols).toBe(false);
  });
});
