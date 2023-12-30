import { useState } from "react";
import {
  cameraIcon,
  gamingIcon,
  hearPhoneIcon,
  mobileIcon,
  monitorIcon,
  smartWatchIcon,
} from "../Utils/all-icons-svg";
import useAxiosSecure from "./useAxiosSecure";

const categorys = [
  {
    name: "phone",
    _id: 1,
    icon: mobileIcon,
  },
  {
    name: "smartWatch",
    _id: 2,
    icon: smartWatchIcon,
  },
  {
    name: "computer",
    _id: 3,
    icon: monitorIcon,
  },
  {
    name: "camera",
    _id: 4,
    icon: cameraIcon,
  },
  {
    name: "headPhones",
    _id: 5,
    icon: hearPhoneIcon,
  },
  {
    name: "gaming",
    _id: 6,
    icon: gamingIcon,
  },
];

const useBrowseCategory = () => {
  const { axiosSecure } = useAxiosSecure();
  const [category, setCategory] = useState(categorys);

  // useEffect(() => {
  //   axiosSecure.get("/api/products").then(({ data }) => {
  //     setProduct(data?.data);
  //   });
  // }, []);
  return { category, setCategory };
};

export default useBrowseCategory;
