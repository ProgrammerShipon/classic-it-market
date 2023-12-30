import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllProducts = () => {
  const { axiosSecure } = useAxiosSecure();
  const [products, setProduct] = useState(null);

  useEffect(() => {
    axiosSecure.get("/api/products").then(({ data }) => {
      setProduct(data?.data);
    });
  }, []);
  return { products };
};

export default useAllProducts;
