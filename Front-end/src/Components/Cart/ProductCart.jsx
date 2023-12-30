import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { percentage } from "../../Utils/Calculators";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProductsContext from "../../hooks/useProductsContext";
import useUser from "../../hooks/useUser";
import RatingStars from "../RatingStars";

const ProductCart = ({ product }) => {
  const { setReCall } = useProductsContext();
  const { user } = useUser();
  const { axiosSecure } = useAxiosSecure();
  const navigate = useNavigate();
  const { discountedPrice, percentageValue } = percentage(
    product?.prices?.price,
    product?.prices?.percent
  );

  // console.log("addToCart ", addToCart);

  const handleAddToCart = (id) => {
    if (user?._id) {
      if (id) {
        const addToCartData = {
          userId: user?._id,
          productId: id,
          order: 1,
        };

        if (addToCartData) {
          axiosSecure
            .post("/api/add-to-cart", addToCartData)
            .then((result) => {
              // console.log(result);
              setReCall((prev) => !prev);
            })
            .catch((err) => console.error("error ", err));
        }
      } else {
        toast("Somethings Wrong!", {
          icon: "⚠️",
        });
      }
    } else {
      navigate("/authentication", { replace: true });
    }
  };

  return (
    <>
      <div className="group transition duration-300 hover:bg-primary/5">
        <figure className="bg-secondary px-10 py-8 h-48 md:h-52 lg:h-60 flex items-center justify-center relative overflow-hidden">
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white rounded">
            <strong> -{percentageValue}% </strong>
          </span>

          {product?.variation?.images[0] && (
            <img
              className="w-full h-auto max-h-56"
              src={product?.variation?.images[0]}
              alt={product?.title}
            />
          )}

          <button
            onClick={() => handleAddToCart(product?._id)}
            className="absolute -bottom-full group-hover:bottom-0 left-0 w-full py-2 text-white bg-black hover:text-black hover:bg-white border hover:border-black capitalize invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300"
          >
            add to cart
          </button>
        </figure>

        <div className="py-4 space-y-2">
          {product?.title && (
            <Link to={`/product-details/${product?._id}`}>
              <h2 className="text-xl text-black font-medium font-poppins">
                {product?.title}
              </h2>
            </Link>
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
