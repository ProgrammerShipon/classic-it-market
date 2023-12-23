import RatingStars from "../../../Components/RatingStars";
import { percentage } from "../../../Utils/Calculators";
// {
//     originalPrice: originalPrice,
//     percentageValue: discountValue,
//     discountedPrice,
//     discountAmount: pt,
//   }
const ProductCart = ({ product }) => {
  const { originalPrice, percentageValue, discountedPrice, discountAmount } =
    percentage(product?.prices?.price, product?.prices?.percent);

  return (
    <>
      <div className="group transition duration-300 hover:bg-primary/5">
        <figure className="bg-secondary px-10 py-8 h-60 flex items-center justify-center relative overflow-hidden">
          {product?.images[0]?.image && (
            <img
              className="w-full h-auto max-h-56"
              src={product?.images[0]?.image}
              alt={product?.title}
            />
          )}

          <button className="absolute -bottom-full group-hover:bottom-0 left-0 w-full py-2 text-white bg-black hover:text-black hover:bg-white border hover:border-black capitalize invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300">
            add to cart
          </button>
        </figure>

        <div className="py-4 space-y-2">
          {product?.title && (
            <h2 className="text-xl text-black font-medium font-poppins">
              {product?.title}
            </h2>
          )}

          {product?.prices && (
            <p className="font-medium flex gap-3">
              <span className="text-primary text-lg">
                $ {Math.round(discountedPrice)}
              </span>
              <span className="text-sm line-through text-gray-500">
                {" "}
                $ {product?.prices?.price}{" "}
              </span>
            </p>
          )}

          {product?.rating && (
            <div className="text-4xl mt-3">
              <RatingStars rating={product?.rating} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCart;
