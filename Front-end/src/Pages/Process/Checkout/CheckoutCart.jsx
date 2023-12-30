import { useState } from "react";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import InputBorder from "../../../Components/Inputs/InputBorder";

const CheckoutCart = () => {
  const [couponCode, setCouponCode] = useState({
    couponCode: "",
  });
  const handleInput = (target) => {
    setCouponCode({
      couponCode: target.value,
    });
  };

  console.log("couponCode ", couponCode);

  return (
    <>
      <div className="flex items-start justify-between mt-10">
        <div className="flex gap-3 flex-col sm:flex-row items-center">
          <InputBorder
            id="couponCode"
            name="couponCode"
            placeholder="Coupon Code"
            style="tracking-[0.5rem]"
            handle={handleInput}
          />

          <ButtonPrimary>
            <span>Apply Coupon</span>
          </ButtonPrimary>
        </div>

        <div className="border border-black/65 py-7 px-6 rounded-md w-[300px]">
          <h3 className="text-lg font-semibold mb-2"> Cart Total </h3>

          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex items-center justify-between gap-2 border-b border-black/40 py-3">
              <p>SubTotal: </p>
              <strong>$345</strong>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-black/40 py-3">
              <p>Shipping: </p>
              <strong>Free</strong>
            </div>
            <div className="flex items-center justify-between gap-2 py-3">
              <p>Total: </p>
              <strong>$345</strong>
            </div>
          </div>

          <div className="flex justify-center">
            <ButtonPrimary style="!mx-auto">
              <span>Process to checkout</span>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
