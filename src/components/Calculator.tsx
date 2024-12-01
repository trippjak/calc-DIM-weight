import React, { useState } from 'react';
import { Calculator, Scale } from 'lucide-react';
import { DimWeightFormula, CalculationResult } from '../types/calculator';

interface DimensionalCalculatorProps {
  formula: DimWeightFormula;
}

export default function DimensionalCalculator({ formula }: DimensionalCalculatorProps) {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
    weight: '',
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateDimWeight = () => {
    const length = parseFloat(dimensions.length);
    const width = parseFloat(dimensions.width);
    const height = parseFloat(dimensions.height);
    const actualWeight = parseFloat(dimensions.weight);

    if ([length, width, height, actualWeight].some(isNaN)) {
      return;
    }

    const dimensionalWeight = (length * width * height) / formula.divisor;
    const billableWeight = Math.max(dimensionalWeight, actualWeight);

    setResult({
      actualWeight,
      dimensionalWeight,
      billableWeight,
      carrier: formula.name,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="w-6 h-6 text-[#D42027]" />
        <h2 className="text-xl font-bold text-gray-800">{formula.name} Calculator</h2>
      </div>
      
      <p className="text-gray-600 mb-4">{formula.description}</p>
      <div className="bg-[#69828E]/40 p-4 rounded-md mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Instructions:</h3>
        <p className="text-gray-700">{formula.instructions}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Length (inches)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={dimensions.length}
            onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Width (inches)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={dimensions.width}
            onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (inches)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={dimensions.height}
            onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Actual Weight (lbs)
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={dimensions.weight}
            onChange={(e) => setDimensions({ ...dimensions, weight: e.target.value })}
          />
        </div>
      </div>

      <button
        onClick={calculateDimWeight}
        className="w-full btn-calculate"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-6 bg-gray-50 p-4 rounded-md">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-[#D42027]" />
            <h3 className="font-semibold text-gray-800">Results</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Actual Weight:</p>
              <p className="font-semibold text-gray-800">{result.actualWeight.toFixed(2)} lbs</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Dimensional Weight:</p>
              <p className="font-semibold text-gray-800">{result.dimensionalWeight.toFixed(2)} lbs</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-600">Billable Weight:</p>
              <p className="font-bold text-lg text-indigo-600">{result.billableWeight.toFixed(2)} lbs</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}