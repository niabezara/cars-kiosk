// /data/types.ts

export type Images360Config = {
  prefix: string;
  count: number;
};

export type Car = {
  name: string;
  price: number;
  image: string;
  images360: Images360Config;
};

export type Brand = {
  brand: string;
  logo: string;
  cars: Car[];
};
