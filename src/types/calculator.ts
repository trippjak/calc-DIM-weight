export interface DimWeightFormula {
  name: string;
  description: string;
  instructions: string;
  formula: string;
  divisor: number;
}

export interface FreightServiceLevel {
  name: string;
  description: string;
  divisor: number;
}

export interface FreightCarrier {
  name: string;
  description: string;
  serviceLevels: FreightServiceLevel[];
}

export interface CalculationResult {
  actualWeight: number;
  dimensionalWeight: number;
  billableWeight: number;
  carrier: string;
}