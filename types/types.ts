// /data/types.ts

export type Car = {
  name: string;
  price: number;
  image: string;
  images360: string[];
};

export type Brand = {
  brand: string;
  logo: string;
  cars: Car[];
};
