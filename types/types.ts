// types/types.ts
export type Images360Config = {
  prefix: string;
  count: number;
} | null;

export type Car = {
  id: string;
  name: string;
  price: number;
  image: string;
  images360: Images360Config;
};

export type Brand = {
  id: string;
  brand: string;
  logo: string;
  cars: Car[];
};
