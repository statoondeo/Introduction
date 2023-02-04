import { Settings } from '../../types';
import * as generator from 'generate-password-browser';

export class PasswordGeneratorService {
  generate(settings: Settings) {
    return generator.generate(settings);
  }
}
