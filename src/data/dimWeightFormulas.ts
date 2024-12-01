import { DimWeightFormula } from '../types/calculator';

export const dimWeightFormulas: DimWeightFormula[] = [
  {
    name: 'USPS',
    description: 'USPS dimensional weight is used for packages over one cubic foot (1,728 cubic inches) when shipped with USPS Priority Mail.',
    instructions: 'Measure your package dimensions in inches and enter the actual weight in pounds. The system will calculate if dimensional weight applies.',
    formula: '(Length × Width × Height) ÷ 166',
    divisor: 166,
  },
  {
    name: 'FedEx',
    description: 'FedEx applies dimensional weight pricing to all packages regardless of size, using it to determine the billable weight for shipping.',
    instructions: 'Enter package dimensions in inches and actual weight in pounds. The higher value between actual and dimensional weight will be your billable weight.',
    formula: '(Length × Width × Height) ÷ 139',
    divisor: 139,
  },
  {
    name: 'UPS',
    description: 'UPS uses dimensional weight for all packages, applying the greater of the actual weight or dimensional weight for billing.',
    instructions: 'Provide package measurements in inches and actual weight in pounds. The system will compare both weights to determine your shipping cost basis.',
    formula: '(Length × Width × Height) ÷ 139',
    divisor: 139,
  },
];