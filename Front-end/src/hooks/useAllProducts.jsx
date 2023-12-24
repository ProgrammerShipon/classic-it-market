import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxios";

const useAllProducts = () => {
  const { axiosSecure } = useAxiosSecure();
  const [products, setProduct] = useState(null);

  useEffect(() => {
    axiosSecure.get("/api/products").then(({ data }) => {
      console.log("result ", data);
      setProduct(data?.data);
    });
  }, []);
  return { products };
};

export default useAllProducts;
