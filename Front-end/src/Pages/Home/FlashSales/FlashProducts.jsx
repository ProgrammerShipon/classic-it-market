import { useEffect, useState } from "react";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import useAllProducts from "../../../hooks/useAllProducts";
import ProductCart from "./ProductCart";

const productsData = [
  {
    _id: 1,
    title: "Havic HV G-92 Gamepad",
    userId: "6586e3825361a0899a3ac8d8",
    variation: {
      images: [
        "https://i.ibb.co/ng50xD7/havic-remote-v1.png",
        "https://i.ibb.co/TPVVPgy/havic-remote-v2.png",
        "https://i.ibb.co/qr82rLd/havic-remote-v3.png",
        "https://i.ibb.co/XZC443y/havic-remote-v4.png",
        "https://i.ibb.co/F0Cf0SQ/havic-remote-v5.png",
      ],
      colors: ["black", "white"],
      size: ["XS", "S", "M", "L", "XL"],
    },
    stock: 5,
    rating: 5,
    prices: { price: 754, percent: 4 },
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    _id: 1,
    title: "AK-900 Wired Keyboard",
    userId: "65880f8acb88015ec18e2864",
    variation: {
      images: [
        "https://m.media-amazon.com/images/I/61neIY76KiL.SS700.jpg",
        "https://m.media-amazon.com/images/I/61yHSBtIivL.SS700.jpg",
        "https://m.media-amazon.com/images/I/71jUhCRB+JL.SS700.jpg",
        "https://m.media-amazon.com/images/I/71rsz2GiSCL.SS700.jpg",
        "https://m.media-amazon.com/images/I/71onSDsf+OL.SS700.jpg",
      ],
      colors: ["black", "white"],
      size: ["XS", "S", "M", "L", "XL"],
    },
    rating: 5,
    prices: { price: 754, percent: 4 },
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    _id: 2,
    title: "IPS LCD Gaming Monitor",
    userId: "6586e3825361a0899a3ac8d8",
    variation: {
      images: [
        "https://www.skyland.com.bd/image/cache/catalog/October23/optix-g2712-01-500x500-500x500.png.webp",
        "https://www.skyland.com.bd/image/cache/catalog/October23/optix-g2712-04-500x500-1000x1000.png.webp",
        "https://www.skyland.com.bd/image/cache/catalog/October23/optix-g2712-04-500x500-500x500.png.webp",
        "https://www.skyland.com.bd/image/cache/catalog/October23/optix-g2712-05-500x500-500x500.png.webp",
        "https://www.skyland.com.bd/image/cache/catalog/October23/optix-g2712-03-500x500-500x500.png.webp",
      ],
      colors: ["silver", "black"],
      size: ["27 inch", "32 inch"],
    },
    stock: 5,
    prices: { price: 856, percent: 7 },
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    _id: 3,
    title: "HAVIT HV-G92 Gamepad",
    userId: "6586e3825361a0899a3ac8d8",
    variation: {
      images: [
        "https://img.gkbcdn.com/p/2015-11-24/pxn-xman-3-pxn-8103-wired-vibration-gamepad-game-controller---red-1571984967384._w500_p1_.jpg",
        "https://img.gkbcdn.com/s3/p/2015-11-24/pxn-xman-3-pxn-8103-wired-vibration-gamepad-game-controller---red-1571984967672.jpg",
        "https://img.gkbcdn.com/p/2015-11-24/pxn-xman-3-pxn-8103-wired-vibration-gamepad-game-controller---red-1571984967965._w500_p1_.jpg",
        "https://img.gkbcdn.com/p/2015-11-24/pxn-xman-3-pxn-8103-wired-vibration-gamepad-game-controller---red-1571984968267._w500_p1_.jpg",
        "https://img.gkbcdn.com/p/2015-11-24/pxn-xman-3-pxn-8103-wired-vibration-gamepad-game-controller---red-1571984968548._w500_p1_.jpg",
      ],
      colors: ["black", "white"],
      size: ["XS", "S", "M", "L", "XL"],
    },
    rating: 4,
    stock: 10,
    prices: { price: 45, percent: 6 },
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
  {
    _id: 4,
    title: "S-Series Comfort Chair",
    userId: "6586e3825361a0899a3ac8d8",
    variation: {
      images: [
        "https://www.ellishomeinteriors.co.uk/product-images/CH33-LG-Modern-Light-Grey-Fabric-Curved-Button-Back-Dining-Chair.webp",
        "https://www.ellishomeinteriors.co.uk/product-images/CH33-LG-Modern-Light-Grey-Fabric-Curved-Button-Back-Dining-Chair-1.webp",
        "https://www.ellishomeinteriors.co.uk/product-images/CH33-LG-Modern-Light-Grey-Fabric-Curved-Button-Back-Dining-Chair-2.webp",
        "https://www.ellishomeinteriors.co.uk/product-images/CH33-LG-Modern-Light-Grey-Fabric-Curved-Button-Back-Dining-Chair-3.webp",
        "https://www.ellishomeinteriors.co.uk/product-images/CH33-LG-Modern-Light-Grey-Fabric-Curved-Button-Back-Dining-Chair.webp",
      ],
      colors: ["black", "white"],
      size: ["XS", "S", "M", "L", "Adjustable"],
    },
    rating: 3.5,
    stock: 12,
    prices: { price: 256, percent: 10 },
    description:
      "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  },
];

const FlashProducts = () => {
  const { products: p } = useAllProducts();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(p);
  }, [p]);

  console.log("products ", products);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products?.length &&
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
