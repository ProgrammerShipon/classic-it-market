import { useEffect, useState } from "react";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import ProductCart from "../../../Components/Cart/ProductCart";
import useAllProducts from "../../../hooks/useAllProducts";
// import ProductCart from "./ProductCart";

const RelatedProducts = () => {
  const { products: p } = useAllProducts();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(p);
  }, [p]);

  // console.log("products ", products);

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
          <span>See All Products</span>
        </ButtonPrimary>
      </div>
    </>
  );
};

export default RelatedProducts;
