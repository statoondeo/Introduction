import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordGeneratorService } from './components/Services/passwordgenerator.service';
import { PasswordGeneratorModule } from './password-generator.module';
import { Settings } from './types';

class MockPasswordGeneratorService {
  generate(settings: Settings) {
    return 'MOCK_PASSWORD';
  }
}
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: PasswordGeneratorService,
          useClass: MockPasswordGeneratorService,
        },
      ],
      imports: [FormsModule, PasswordGeneratorModule],
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

  it('should be "MOCK_PASSWORD" when "Générer" button is clicked', () => {
    // Arrange
    // Act
    fixture.nativeElement.querySelector('button').click();
    // Assert
    expect(fixture.nativeElement.querySelector('article')?.textContent).toBe(
      'MOCK_PASSWORD'
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
