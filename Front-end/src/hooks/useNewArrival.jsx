import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const Arrival = [
  {
    _id: 1,
    image: "https://i.ibb.co/vPWmvVf/slim-goedkope-playstation-large.png",
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
  },
  {
    _id: 2,
    image:
      "https://i.ibb.co/8bgcyfY/woman-wearing-hat-posing-black-background.png",
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
  },
  {
    _id: 2,
    image:
      "https://i.ibb.co/Kyk54rK/echo-clipart-transparent-amazon-echo-png.png",
    // image: "https://i.ibb.co/wJmDR91/specker1.png",
    title: "Speakers",
    description: "Amazon wireless speakers",
  },
  {
    _id: 4,
    image: "https://i.ibb.co/412bMHJ/Gucci-perfume.png",
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
  },
];

const useNewArrival = () => {
  const { axiosSecure } = useAxiosSecure();
  const [products, setProduct] = useState(Arrival);

  // useEffect(() => {
  //   axiosSecure.get("/api/products").then(({ data }) => {
  //     setProduct(data?.data);
  //   });
  // }, []);
  return { products };
};

export default useNewArrival;
