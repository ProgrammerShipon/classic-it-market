import { useState } from "react";
import ButtonSecondary from "../../../Components/Buttons/ButtonSecondary";
import useProductsContext from "../../../hooks/useProductsContext";
import ProcessItem from "./ProcessItem";

const ProductLists = () => {
  const [items, setItems] = useState([
    { id: "kaeroi", value: 0 },
    { id: "kaeroi", value: 0 },
  ]);
  const {
    addToCart: { addToCarts, products },
  } = useProductsContext();
  // const { state } = useLocation();
  // console.log("state ", state);
  // console.log("addToCart ", addToCarts, products);

  // console.log("items ", items);

  const handleUpdate = () => {};

  return (
    <>
      {/* Table */}
      <div>
        {/* Table head */}
        <div className="grid grid-cols-4 items-center justify-between w-full gap-2 font-semibold text-lg mb-3">
          <div>
            <h5> Product </h5>
          </div>
          <div>
            <h5> Price </h5>
          </div>
          <div>
            <h5> Quantity </h5>
          </div>
          <div>
            <h5> Subtotal </h5>
          </div>
        </div>

        {/* table body */}
        <div className="flex flex-col gap-3">
          {products?.length &&
            products?.map((product, idx) => (
              <ProcessItem
                key={idx}
                product={product}
                setItems={setItems}
                items={items}
              />
            ))}
        </div>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-between w-full mt-6">
        <ButtonSecondary>
          <span> Return Shop </span>
        </ButtonSecondary>

        <ButtonSecondary onClick={handleUpdate}>
          <span> Update Cart </span>
        </ButtonSecondary>
      </div>
    </>
  );
};

export default ProductLists;
