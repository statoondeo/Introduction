export class FeesService {
  calculate(revenue: number) {
    // Caclul complexe de l'impôt
    return revenue * 0.15;
  }
}
