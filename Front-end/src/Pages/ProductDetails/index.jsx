import { useParams } from "react-router-dom";
import Details from "./Details/Details";

// Product Details Page
export default function index() {
  const params = useParams();
  console.log("product/:productId ", params);
  return (
    <>
      <Details />
    </>
  );
}
