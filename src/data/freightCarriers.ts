import { FreightCarrier } from '../types/calculator';

export const freightCarriers: FreightCarrier[] = [
  {
    name: 'YRC Freight',
    description: 'One of the largest LTL carriers in North America, offering comprehensive freight shipping solutions.',
    serviceLevels: [
      {
        name: 'Standard LTL',
        description: 'Standard Less-than-Truckload service with typical transit times',
        divisor: 194,
      },
      {
        name: 'Accelerated',
        description: 'Faster transit times for time-sensitive shipments',
        divisor: 189,
      },
    ],
  },
  {
    name: 'Old Dominion',
    description: 'Premium service provider known for reliability and on-time performance.',
    serviceLevels: [
      {
        name: 'Standard Service',
        description: 'Regular LTL service with industry-leading reliability',
        divisor: 196,
      },
      {
        name: 'Expedited',
        description: 'Guaranteed delivery times for critical shipments',
        divisor: 191,
      },
    ],
  },
  {
    name: 'XPO Logistics',
    description: 'Global provider offering technology-enabled freight transportation services.',
    serviceLevels: [
      {
        name: 'Economy',
        description: 'Cost-effective option for less time-sensitive freight',
        divisor: 198,
      },
      {
        name: 'Priority',
        description: 'Expedited service with guaranteed delivery windows',
        divisor: 192,
      },
      {
        name: 'Guaranteed Express',
        description: 'Premium service with fastest transit times',
        divisor: 188,
      },
    ],
  },
  {
    name: 'Saia',
    description: 'Regional and national LTL carrier known for quality service.',
    serviceLevels: [
      {
        name: 'Standard LTL',
        description: 'Traditional LTL service with regular transit times',
        divisor: 195,
      },
      {
        name: 'Guaranteed Select',
        description: 'Guaranteed delivery by specific date',
        divisor: 190,
      },
    ],
  },
];