import { Brand } from "../types/types";

/**
 * All 360 image assets required statically at build time.
 * React Native bundler needs static require() paths - no dynamic requires.
 * This map is loaded ONCE, shared across every car - no duplication.
 */
export const imageMap: Record<string, number> = {
  "36-1": require("../assets/car/36-(1).jpg"),
  "36-2": require("../assets/car/36-(2).jpg"),
  "36-3": require("../assets/car/36-(3).jpg"),
  "36-4": require("../assets/car/36-(4).jpg"),
  "36-5": require("../assets/car/36-(5).jpg"),
  "36-6": require("../assets/car/36-(6).jpg"),
  "36-7": require("../assets/car/36-(7).jpg"),
  "36-8": require("../assets/car/36-(8).jpg"),
  "36-9": require("../assets/car/36-(9).jpg"),
  "36-10": require("../assets/car/36-(10).jpg"),
  "36-11": require("../assets/car/36-(11).jpg"),
  "36-12": require("../assets/car/36-(12).jpg"),
  "36-13": require("../assets/car/36-(13).jpg"),
  "36-14": require("../assets/car/36-(14).jpg"),
  "36-15": require("../assets/car/36-(15).jpg"),
  "36-16": require("../assets/car/36-(16).jpg"),
  "36-17": require("../assets/car/36-(17).jpg"),
  "36-18": require("../assets/car/36-(18).jpg"),
  "36-19": require("../assets/car/36-(19).jpg"),
  "36-20": require("../assets/car/36-(20).jpg"),
  "36-21": require("../assets/car/36-(21).jpg"),
  "36-22": require("../assets/car/36-(22).jpg"),
  "36-23": require("../assets/car/36-(23).jpg"),
  "36-24": require("../assets/car/36-(24).jpg"),
  "36-25": require("../assets/car/36-(25).jpg"),
  "36-26": require("../assets/car/36-(26).jpg"),
  "36-27": require("../assets/car/36-(27).jpg"),
  "36-28": require("../assets/car/36-(28).jpg"),
  "36-29": require("../assets/car/36-(29).jpg"),
  "36-30": require("../assets/car/36-(30).jpg"),
  "36-31": require("../assets/car/36-(31).jpg"),
  "36-32": require("../assets/car/36-(32).jpg"),
  "36-33": require("../assets/car/36-(33).jpg"),
  "36-34": require("../assets/car/36-(34).jpg"),
  "36-35": require("../assets/car/36-(35).jpg"),
};

export const carData: Brand[] = [
  {
    brand: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg",
    cars: [
      {
        name: "Corolla",
        price: 23000,
        image:
          "https://cdn.pixabay.com/photo/2019/12/03/19/16/toyota-corolla-4677981_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "Camry",
        price: 28000,
        image:
          "https://cdn.pixabay.com/photo/2019/06/26/19/18/toyota-camry-4307370_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "RAV4",
        price: 35000,
        image:
          "https://cdn.pixabay.com/photo/2020/01/03/09/50/toyota-rav4-4738770_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
    ],
  },
  {
    brand: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.svg",
    cars: [
      {
        name: "Civic",
        price: 22000,
        image:
          "https://cdn.pixabay.com/photo/2018/01/16/22/48/honda-civic-3080831_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "Accord",
        price: 27000,
        image:
          "https://cdn.pixabay.com/photo/2017/12/27/14/01/honda-3048802_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "CR-V",
        price: 34000,
        image:
          "https://cdn.pixabay.com/photo/2017/06/01/18/09/honda-crv-2367380_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
    ],
  },
  {
    brand: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    cars: [
      {
        name: "X3",
        price: 43000,
        image:
          "https://cdn.pixabay.com/photo/2016/12/13/05/11/bmw-1904474_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "X5",
        price: 60000,
        image:
          "https://cdn.pixabay.com/photo/2016/12/27/09/12/bmw-x5-1930970_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "3 Series",
        price: 41000,
        image:
          "https://cdn.pixabay.com/photo/2016/12/05/17/14/bmw-1888352_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
    ],
  },
  {
    brand: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_logo.svg",
    cars: [
      {
        name: "C-Class",
        price: 42000,
        image:
          "https://cdn.pixabay.com/photo/2017/03/01/13/52/mercedes-2118812_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "E-Class",
        price: 55000,
        image:
          "https://cdn.pixabay.com/photo/2017/03/01/13/53/mercedes-2118813_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
      {
        name: "GLA",
        price: 40000,
        image:
          "https://cdn.pixabay.com/photo/2017/03/01/13/51/mercedes-2118811_1280.png",
        images360: { prefix: "36-", count: 35 },
      },
    ],
  },
];
