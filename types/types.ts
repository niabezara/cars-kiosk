export interface EngineConfig {
  id: string;
  name: string; // e.g. "2.8L Turbo Diesel 4WD"
  fuel: string; // "Diesel" | "Gasoline" | "Hybrid"
  horsepower: number; // hp
  horsepowerKw: number; // kW
  torque: number; // Nm
  transmission: string; // e.g. "8-Speed Automatic"
  fuelConsumption: string; // e.g. "9L / 100km"
}

export interface Grade {
  id: string; // e.g. "tx"
  name: string; // e.g. "TX"
  fullPrice: number; // full purchase price
  leaseFrom: number; // monthly lease starting price
  isPopular?: boolean; // highlighted grade
}

export interface CarDetails {
  acceleration: string;
  topSpeed: string;
  drivetrain: string;
  description: string;
  colors: string[];
}

export interface Car {
  id: string;
  name: string;
  image: string;
  images360: { prefix: string; count: number } | null;
  details: CarDetails;
  engines: EngineConfig[]; // multiple engine options
  grades: Grade[]; // multiple trim grades with prices
}

export interface Brand {
  id: string;
  brand: string;
  logo: string;
  cars: Car[];
}
