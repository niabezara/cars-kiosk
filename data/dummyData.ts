import { Brand } from "@/types/types";

export const carData: Brand[] = [
  {
    id: "Toyota",
    brand: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg",
    cars: [
      {
        id: "toyota-land-cruiser",
        name: "Land Cruiser",
        image: require("../assets/car/36-(12).jpg"),
        images360: { prefix: "land-cruiser-", count: 36 },
        details: {
          acceleration: "0-100 km/h in 8.4s",
          topSpeed: "210 km/h",
          drivetrain: "4WD",
          description:
            "The Toyota Land Cruiser is a legendary full-size SUV built for off-road capability and long-distance durability.",
          colors: ["White", "Black", "Silver", "Dark Grey", "Sand", "Grey"],
        },
        engines: [
          {
            id: "lc-diesel",
            name: "2.8L Turbo Diesel 4WD",
            fuel: "Diesel",
            horsepower: 201,
            horsepowerKw: 150,
            torque: 500,
            transmission: "8-Speed Automatic",
            fuelConsumption: "9L / 100km",
          },
          {
            id: "lc-petrol",
            name: "2.7L Petrol",
            fuel: "Gasoline",
            horsepower: 165,
            horsepowerKw: 123,
            torque: 246,
            transmission: "6-Speed Automatic",
            fuelConsumption: "12L / 100km",
          },
          {
            id: "lc-turbo-petrol",
            name: "2.4L Turbo Petrol",
            fuel: "Gasoline",
            horsepower: 275,
            horsepowerKw: 205,
            torque: 430,
            transmission: "8-Speed Automatic",
            fuelConsumption: "13L / 100km",
          },
        ],
        grades: [
          { id: "tx", name: "TX", fullPrice: 167000, leaseFrom: 3500 },
          { id: "gx", name: "GX", fullPrice: 170000, leaseFrom: 3600 },
          {
            id: "vx",
            name: "VX",
            fullPrice: 175000,
            leaseFrom: 3700,
            isPopular: true,
          },
          { id: "vxl", name: "VXL", fullPrice: 184000, leaseFrom: 3900 },
          { id: "vxl+", name: "VXL+", fullPrice: 190000, leaseFrom: 4000 },
        ],
      },

      // ── Corolla ────────────────────────────────────────────────────────────
      {
        id: "toyota-corolla",
        name: "Corolla",
        image: require("../assets/car/36-(12).jpg"),
        images360: { prefix: "corolla-", count: 35 },
        details: {
          acceleration: "0-100 km/h in 8.2s",
          topSpeed: "180 km/h",
          drivetrain: "FWD",
          description:
            "Toyota Corolla is a reliable compact sedan known for its efficiency, comfort, and advanced safety features.",
          colors: ["Red", "Black", "White", "Silver"],
        },
        engines: [
          {
            id: "corolla-base",
            name: "2.0L 4-Cylinder",
            fuel: "Gasoline",
            horsepower: 169,
            horsepowerKw: 126,
            torque: 200,
            transmission: "CVT Automatic",
            fuelConsumption: "7L / 100km",
          },
          {
            id: "corolla-hybrid",
            name: "2.5L Hybrid",
            fuel: "Hybrid",
            horsepower: 196,
            horsepowerKw: 146,
            torque: 221,
            transmission: "CVT Automatic",
            fuelConsumption: "4.5L / 100km",
          },
        ],
        grades: [
          { id: "le", name: "LE", fullPrice: 23000, leaseFrom: 380 },
          { id: "se", name: "SE", fullPrice: 25500, leaseFrom: 420 },
          {
            id: "xse",
            name: "XSE",
            fullPrice: 27000,
            leaseFrom: 450,
            isPopular: true,
          },
          { id: "xle", name: "XLE", fullPrice: 29000, leaseFrom: 480 },
        ],
      },

      // ── Camry ──────────────────────────────────────────────────────────────
      {
        id: "toyota-camry",
        name: "Camry",
        image:
          "https://cdn.pixabay.com/photo/2019/06/26/19/18/toyota-camry-4307370_1280.png",
        images360: null,
        details: {
          acceleration: "0-100 km/h in 7.5s",
          topSpeed: "210 km/h",
          drivetrain: "FWD",
          description:
            "Toyota Camry is a midsize sedan offering excellent comfort, performance, and modern technology.",
          colors: ["Black", "White", "Blue", "Silver"],
        },
        engines: [
          {
            id: "camry-base",
            name: "2.5L 4-Cylinder",
            fuel: "Gasoline",
            horsepower: 203,
            horsepowerKw: 152,
            torque: 247,
            transmission: "8-Speed Automatic",
            fuelConsumption: "8L / 100km",
          },
          {
            id: "camry-hybrid",
            name: "2.5L Hybrid",
            fuel: "Hybrid",
            horsepower: 218,
            horsepowerKw: 160,
            torque: 221,
            transmission: "CVT Automatic",
            fuelConsumption: "5L / 100km",
          },
          {
            id: "camry-v6",
            name: "3.5L V6",
            fuel: "Gasoline",
            horsepower: 301,
            horsepowerKw: 224,
            torque: 362,
            transmission: "8-Speed Automatic",
            fuelConsumption: "10L / 100km",
          },
        ],
        grades: [
          { id: "le", name: "LE", fullPrice: 28000, leaseFrom: 460 },
          { id: "se", name: "SE", fullPrice: 30500, leaseFrom: 500 },
          {
            id: "xse",
            name: "XSE",
            fullPrice: 33000,
            leaseFrom: 540,
            isPopular: true,
          },
          { id: "xle", name: "XLE", fullPrice: 35000, leaseFrom: 575 },
          { id: "trd", name: "TRD", fullPrice: 37000, leaseFrom: 610 },
        ],
      },
    ],
  },

  // ── Honda ──────────────────────────────────────────────────────────────────
  {
    id: "Honda",
    brand: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
    cars: [
      {
        id: "honda-civic",
        name: "Civic",
        image: require("../assets/car/36-(12).jpg"),
        images360: null,
        details: {
          acceleration: "0-100 km/h in 7.9s",
          topSpeed: "200 km/h",
          drivetrain: "FWD",
          description:
            "Honda Civic is a sporty compact car with a turbocharged engine, refined interior, and impressive fuel economy.",
          colors: ["Sonic Grey", "Rallye Red", "Lunar Silver", "Crystal Black"],
        },
        engines: [
          {
            id: "civic-cvt",
            name: "1.5L Turbo 4-Cylinder",
            fuel: "Gasoline",
            horsepower: 158,
            horsepowerKw: 118,
            torque: 240,
            transmission: "CVT Automatic",
            fuelConsumption: "6.8L / 100km",
          },
          {
            id: "civic-manual",
            name: "2.0L 4-Cylinder",
            fuel: "Gasoline",
            horsepower: 158,
            horsepowerKw: 118,
            torque: 187,
            transmission: "6-Speed Manual",
            fuelConsumption: "7.5L / 100km",
          },
        ],
        grades: [
          { id: "lx", name: "LX", fullPrice: 24000, leaseFrom: 390 },
          { id: "sport", name: "Sport", fullPrice: 26500, leaseFrom: 430 },
          {
            id: "exl",
            name: "EX-L",
            fullPrice: 29000,
            leaseFrom: 470,
            isPopular: true,
          },
          { id: "touring", name: "Touring", fullPrice: 32000, leaseFrom: 520 },
        ],
      },
    ],
  },

  // ── BMW ────────────────────────────────────────────────────────────────────
  {
    id: "BMW",
    brand: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    cars: [
      {
        id: "bmw-3-series",
        name: "3 Series",
        image: require("../assets/car/36-(12).jpg"),
        images360: null,
        details: {
          acceleration: "0-100 km/h in 5.8s",
          topSpeed: "250 km/h",
          drivetrain: "RWD",
          description:
            "The BMW 3 Series is a benchmark sports sedan combining dynamic driving performance with luxury and technology.",
          colors: [
            "Alpine White",
            "Black Sapphire",
            "Portimao Blue",
            "Melbourne Red",
          ],
        },
        engines: [
          {
            id: "3s-320i",
            name: "2.0L TwinPower Turbo (320i)",
            fuel: "Gasoline",
            horsepower: 184,
            horsepowerKw: 135,
            torque: 300,
            transmission: "8-Speed Automatic",
            fuelConsumption: "6.5L / 100km",
          },
          {
            id: "3s-330i",
            name: "2.0L TwinPower Turbo (330i)",
            fuel: "Gasoline",
            horsepower: 258,
            horsepowerKw: 190,
            torque: 400,
            transmission: "8-Speed Automatic",
            fuelConsumption: "7.1L / 100km",
          },
          {
            id: "3s-m340i",
            name: "3.0L TwinPower Turbo (M340i)",
            fuel: "Gasoline",
            horsepower: 374,
            horsepowerKw: 275,
            torque: 500,
            transmission: "8-Speed Automatic",
            fuelConsumption: "8.4L / 100km",
          },
        ],
        grades: [
          { id: "320i", name: "320i", fullPrice: 48000, leaseFrom: 780 },
          {
            id: "330i",
            name: "330i",
            fullPrice: 55000,
            leaseFrom: 890,
            isPopular: true,
          },
          { id: "m340i", name: "M340i", fullPrice: 67000, leaseFrom: 1080 },
        ],
      },
    ],
  },
];
