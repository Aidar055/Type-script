// ? task1
let num: number = 1;
let string: string = "Aidar";
let bool: boolean = true;
// ?tas2

type Product = {
  id: number;
  tite: string;
  description: string;
  price: number;
  colors: string[];
};

const product: Product[] = [
  {
    id: 1,
    tite: "Aplle",
    description: "Apple is Apple",
    price: 50,
    colors: ["red", "green"],
  },
  {
    id: 2,
    tite: "grape",
    description: "grape is grape",
    price: 100,
    colors: ["green", "black"],
  },
  {
    id: 3,
    tite: "banana",
    description: "banana is banana",
    price: 213,
    colors: ["yellow"],
  },
];

console.log(product);
type TypeFunck = (radiuse: number, p: number) => number;

const calculateArea: TypeFunck = (radiues, p) => {
  const area = p * Math.pow(radiues, 2);
  return area;
};
// console.log(calculateArea(5, 3.14));

type TypeTask2 = (mase: number, value: number) => number;

const calculteTask2: TypeTask2 = (mase, value) => {
  const res = mase / value;
  return res;
};
// console.log(calculteTask2(15, 26));
