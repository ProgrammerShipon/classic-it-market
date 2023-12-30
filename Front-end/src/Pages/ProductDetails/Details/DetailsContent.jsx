import { useState } from "react";
import toast from "react-hot-toast";
import ColorVariation from "../../../Components/ColorVariation";
import IncreaseDecrease from "../../../Components/IncreaseDecrease";
import RatingStars from "../../../Components/RatingStars";
import SizeVariation from "../../../Components/SizeVariation";
import { heartIcon, returnIcon, trackIcon } from "../../../Utils/all-icons-svg";
import useUser from "../../../hooks/useUser";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
// import toast from "react-hot-toast";

const DetailsContent = ({ details }) => {
  const { user } = useUser();
  const [totalPrice, setTotalPrice] = useState({
    TOriginalPrice: "",
    TDiscountValue: "",
    TDiscountedPrice: "",
    TDiscountAmount: "",
  });
  const [buyData, setBuyData] = useState({
    color: user?._id,
    size: "",
    price: 0,
  });

  const {
    _id,
    title,
    variation: {
      colors: [],
      size: [],
    },
    stock,
    rating,
    prices,
    description,
  } = details;
  // const calculate = percentage(price, percent);

  const handleFavorite = (id) => {
    toast.loading("Coming Soon...");
  };

  const handleBuy = (id) => {
    // console.log("buyData ", buyData);
    toast.loading("Thanks you, But Coming Soon...");
  };

  return (
    <>
      <div className="space-y-4">
        {title && <h1 className="text-2xl font-semibold"> {title} </h1>}
        <div className="flex items-center justify-start gap-6">
          {rating && (
            <div className="">
              <div className="text-4xl">
                <RatingStars rating={rating} />
              </div>{" "}
            </div>
          )}
          <span> | </span>
          {stock && <span className="text-green-500"> In Stock </span>}
        </div>

        <div className="">
          {totalPrice?.TDiscountedPrice && (
            <strong className="text-2xl font-inter font-normal mt-5 mb-7">
              ${Math.ceil(totalPrice?.TDiscountedPrice).toFixed(2)}
            </strong>
          )}

          {totalPrice?.TOriginalPrice && (
            <strong className="text-lg font-inter font-normal ml-5 line-through">
              ${Math.ceil((totalPrice?.TOriginalPrice).toFixed(2))}
            </strong>
          )}
        </div>

        {description && <p> {description} </p>}

        <div className="divide-y-2 my-3 bg-gray-400 h-0.5"></div>

        {details?.variation?.colors?.length && (
          <div className="flex gap-3">
            Colors:{" "}
            <ColorVariation
              colorItems={details?.variation?.colors}
              setBuyData={setBuyData}
            />
          </div>
        )}

        {details?.variation?.size?.length && (
          <div className="flex gap-3">
            <span>Size: </span>
            <SizeVariation
              sizeItems={details?.variation?.size}
              setBuyData={setBuyData}
            />
          </div>
        )}

        <div className="flex items-center justify-start">
          <IncreaseDecrease prices={prices} setTotalPrice={setTotalPrice} />

          <ButtonPrimary onClick={handleBuy}>
            <span> Buy Now </span>
          </ButtonPrimary>

          <button
            onClick={() => handleFavorite(_id)}
            className="border h-10 w-10 rounded-md p-1 flex items-center justify-center"
          >
            <span className="w-full h-full">{heartIcon}</span>
          </button>
        </div>

        <div className="border-2 border-gray-300 !mt-10">
          <div className="flex items-center py-2">
            <figure className="w-16 h-16 flex items-center justify-center">
              <span>{trackIcon}</span>
            </figure>
            <div className="font-poppins ">
              <h4 className="text-lg font-medium">Free Delivery</h4>
              <p className="font-medium text-base">
                Enter your postal code for Delivery Availability{" "}
              </p>
            </div>
          </div>
          <div className="divide-y-2 my-3 bg-gray-300 h-[1px]"></div>
          <div className="flex items-center py-2">
            <figure className="w-16 h-16 flex items-center justify-center">
              <span>{returnIcon}</span>
            </figure>
            <div className="font-poppins ">
              <h4 className="text-lg font-medium">Return Delivery</h4>
              <p className="font-medium text-base">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
