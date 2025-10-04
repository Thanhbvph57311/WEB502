interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Tủ lạnh",
    price: 1000,
    category: "Điện tử",
  },
  {
    id: 2,
    name: "Rượu",
    price: 2000,
    category: "Thực phẩm",
  },
  {
    id: 3,
    name: "Tivi",
    price: 3000,
    category: "Điện tử",
  },
  {
    id: 4,
    name: "Thịt chó",
    price: 4000,
    category: "Thực phẩm",
  },
  {
    id: 5,
    name: "Laptop",
    price: 5000,
    category: "Điện tử",
  },
];

function filterByCategory(products: Product[], category: string): Product[] {
  return products.filter((p) => p.category === category);
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, p) => total + p.price, 0);
}

function findMinMax(products: Product[]): { min: Product; max: Product } {
  if (products.length === 0) {
    throw new Error("Product array is empty");
  }
  let min = products[0];
  let max = products[0];

  for (const p of products) {
    if (p.price < min.price) min = p;
    if (p.price > max.price) max = p;
  }
  return { min, max };
}

console.log("Sản phẩm điện tử : ", filterByCategory(products, "Điện tử"));
console.log("Sản phẩm thục phẩm : ", filterByCategory(products, "Thực phẩm"));
console.log("Tổng giá sản phẩm : ", calculateTotalPrice(products));
console.log("Sản phẩm có giá thấp nhất và cao nhất : ", findMinMax(products));
