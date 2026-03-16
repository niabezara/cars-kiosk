import { Brand } from "../types/types";

export const carData: Brand[] = [
  {
    id: "Toyota",
    brand: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg",
    cars: [
      {
        id: "toyota-corolla",
        name: "Corolla",
        price: 23000,
        image:
          "https://cdn.pixabay.com/photo/2019/12/03/19/16/toyota-corolla-4677981_1280.png",
        images360: { prefix: "corolla-", count: 35 }, // ✅ real images
      },
      {
        id: "toyota-camry",
        name: "Camry",
        price: 28000,
        image:
          "https://cdn.pixabay.com/photo/2019/06/26/19/18/toyota-camry-4307370_1280.png",
        images360: null, // 🚫 no images yet
      },
      {
        id: "toyota-rav4",
        name: "RAV4",
        price: 35000,
        image:
          "https://cdn.pixabay.com/photo/2020/01/03/09/50/toyota-rav4-4738770_1280.png",
        images360: null,
      },
    ],
  },
  {
    id: "honda",
    brand: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.svg",
    cars: [
      {
        id: "honda-civic",
        name: "Civic",
        price: 22000,
        image:
          "https://cdn.pixabay.com/photo/2018/01/16/22/48/honda-civic-3080831_1280.png",
        images360: null,
      },
      {
        id: "honda-accord",
        name: "Accord",
        price: 27000,
        image:
          "https://cdn.pixabay.com/photo/2017/12/27/14/01/honda-3048802_1280.png",
        images360: null,
      },
      {
        id: "honda-crv",
        name: "CR-V",
        price: 34000,
        image:
          "https://cdn.pixabay.com/photo/2017/06/01/18/09/honda-crv-2367380_1280.png",
        images360: null,
      },
    ],
  },
  {
    id: "bmw",
    brand: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    cars: [
      {
        id: "bmw-x3",
        name: "X3",
        price: 43000,
        image:
          "https://cdn.pixabay.com/photo/2016/12/13/05/11/bmw-1904474_1280.png",
        images360: null,
      },
      {
        id: "bmw-x5",
        name: "X5",
        price: 60000,
        image:
          "https://cdn.pixabay.com/photo/2016/12/27/09/12/bmw-x5-1930970_1280.png",
        images360: null,
      },
      {
        id: "bmw-3series",
        name: "3 Series",
        price: 41000,
        image:
          "https://cdn.pixabay.com/photo/2016/12/05/17/14/bmw-1888352_1280.png",
        images360: null,
      },
    ],
  },
  {
    id: "mercedes",
    brand: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_logo.svg",
    cars: [
      {
        id: "mercedes-c",
        name: "C-Class",
        price: 42000,
        image:
          "https://cdn.pixabay.com/photo/2017/03/01/13/52/mercedes-2118812_1280.png",
        images360: null,
      },
      {
        id: "mercedes-e",
        name: "E-Class",
        price: 55000,
        image:
          "https://cdn.pixabay.com/photo/2017/03/01/13/53/mercedes-2118813_1280.png",
        images360: null,
      },
      {
        id: "mercedes-gla",
        name: "GLA",
        price: 40000,
        image:
          "https://cdn.pixabay.com/photo/2017/03/01/13/51/mercedes-2118811_1280.png",
        images360: null,
      },
    ],
  },
];
