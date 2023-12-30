import { useState } from "react";
import Details from "./Details/Details";
import RelatedItems from "./RelatedItems/RelatedItems";

// Product Details Page
export default function index() {
  const [reCall, setReCall] = useState(true);

  return (
    <>
      <Details reCall={reCall} />
      <RelatedItems setReCall={setReCall} />
    </>
  );
}
