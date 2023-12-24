import { useEffect, useState } from "react";
import { percentage } from "../Utils/Calculators";

const IncreaseDecrease = ({ setTotalPrice, prices }) => {
  const [countState, setCountState] = useState(1);
  const { originalPrice, discountValue, discountedPrice, discountAmount } =
    percentage(prices?.price, prices?.percent);

  useEffect(() => {
    setTotalPrice({
      TOriginalPrice: originalPrice * countState,
      TDiscountValue: discountValue * countState,
      TDiscountedPrice: discountedPrice * countState,
      TDiscountAmount: discountAmount * countState,
    });
  }, [countState]);

  return (
    <div className="flex gap-1 border items-center">
      <button
        onClick={() => setCountState(countState === 1 ? 1 : countState - 1)}
        className="w-9 h-9 rounded-sm p-1 flex items-center justify-center text-3xl hover:text-white hover:bg-primary transition duration-300 font-bold"
      >
        <span>-</span>
      </button>
      <span className="min-w-16 p-1 border-x text-center inline-block text-xl">
        {" "}
        {countState}{" "}
      </span>
      <button
        onClick={() => setCountState(countState + 1)}
        className="w-9 h-9 rounded-sm p-1 flex items-center justify-center text-3xl hover:text-white hover:bg-primary transition duration-300 font-bold"
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default IncreaseDecrease;
