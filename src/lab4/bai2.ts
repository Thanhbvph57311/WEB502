interface Vehicle {
  name: string;
  type: string;
  speed: number;
}

interface ProductNew extends Vehicle {
  enum: "Xăng" | "Điện";
}

const moTorBike: ProductNew[] = [
  {
    name: "kawasaki z800",
    type: "Xe máy",
    speed: 350,
    enum: "Xăng",
  },
  {
    name: "kawasaki z800",
    type: "Xe máy",
    speed: 350,
    enum: "Xăng",
  },
  {
    name: "kawasaki z800",
    type: "Xe máy",
    speed: 350,
    enum: "Xăng",
  },
  {
    name: "kawasaki z800",
    type: "Xe máy",
    speed: 350,
    enum: "Xăng",
  },
  {
    name: "kawasaki z800",
    type: "Xe máy",
    speed: 350,
    enum: "Xăng",
  },
];

console.log(moTorBike);

const calculateTravelTime = (vehicle: Vehicle, distance: number): number => {
  if (vehicle.speed === 0) {
    return Infinity;
  }
  return distance / vehicle.speed;
};

const distance = 100;

moTorBike.forEach((v) => {
  const time = calculateTravelTime(v, distance);
  console.log(`${v.name} đi ${distance} km mất khoảng ${time.toFixed(2)} giờ`);
});
