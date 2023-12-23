import { useState } from "react";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import ProductCart from "./ProductCart";

const productsData = [
  {
    id: 1,
    title: "AK-900 Wired Keyboard",
    images: [
      { image: "https://i.ibb.co/3fFfsPX/keyboard.png", color: "black" },
    ],
    color: ["black", "white"],
    size: "Full-size",
    rating: 5,
    prices: { price: 754, percent: 4 },
  },
  {
    id: 2,
    title: "IPS LCD Gaming Monitor",
    images: [{ image: "https://i.ibb.co/dPZPJ2h/monitor.png", color: "black" }],
    color: ["silver", "black"],
    size: "27 inch",
    rating: 4.5,
    prices: { price: 856, percent: 7 },
  },
  {
    id: 3,
    title: "HAVIT HV-G92 Gamepad",
    images: [{ image: "https://i.ibb.co/km4BLC7/remote.png", color: "red" }],
    color: ["white", "gray", "red"],
    size: "Universal",
    rating: 4,
    prices: { price: 45, percent: 6 },
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    images: [{ image: "https://i.ibb.co/QJ2ckXw/chair.png", color: "gray" }],
    color: ["gray", "black"],
    size: "Adjustable",
    rating: 3.5,
    prices: { price: 256, percent: 10 },
  },
];

const FlashProducts = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.length &&
          products.map((product) => (
            <ProductCart key={product?._id} product={product} />
          ))}
      </div>

      <div className="mt-12 text-center ">
        <ButtonPrimary>
          <span>View All Products</span>
        </ButtonPrimary>
      </div>
    </>
  );
};

export default FlashProducts;
