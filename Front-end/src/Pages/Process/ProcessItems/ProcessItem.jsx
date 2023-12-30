import { useEffect, useState } from "react";
import IncreaseDecrease from "../../../Components/IncreaseDecrease";

const ProcessItem = ({ product, setItems, items }) => {
  //   console.log("product ", product);
  const [totalPrice, setTotalPrice] = useState(null);
  const [itemsChanges, setItemsChanges] = useState({});
  const subTotal = Math.ceil(totalPrice?.TDiscountedPrice);

  useEffect(() => {
    // console.log("itemsChanges");
    // if (itemsChanges && items) {
    //   for (const newItem of itemsChanges) {
    //     console.log("previous value ", newItem);
    //     if (newItem?.id === itemsChanges?.id) {
    //       console.log("id ", newItem?.id);
    //     }
    //   }
    //   setItems();
    // }
    // console.log("itemsChanges ", { id: product?.cartId, ...itemsChanges });
  }, [itemsChanges]);

  return (
    <>
      <div className="grid grid-cols-4 items-center justify-between w-full gap-2 py-4 px-2 hover:bg-secondary rounded hover:shadow-md transition duration-300">
        <div className="flex gap-2 items-center justify-start">
          <figure className="transition duration-300 w-16 h-16 p-1.5 flex items-center justify-center bg-secondary group-hover:bg-white">
            <img
              className="w-full h-full"
              src={product?.variation?.images[0]}
              alt={product?.title}
            />
          </figure>
          <h5> {product?.title} </h5>
        </div>
        <div>
          <span>
            <strong>{totalPrice?.TOriginalPrice}</strong>{" "}
            {totalPrice?.TDiscountValue
              ? `(-
            ${totalPrice?.TDiscountValue}%)`
              : ""}
          </span>
        </div>
        <div>
          <h5>
            <IncreaseDecrease
              setTotalPrice={setTotalPrice}
              setItemsChanges={setItemsChanges}
              prices={product?.prices}
              defaultItem={product?.productCart}
            />
          </h5>
        </div>
        <div>
          <h5> {subTotal} </h5>
        </div>
      </div>
    </>
  );
};

export default ProcessItem;
