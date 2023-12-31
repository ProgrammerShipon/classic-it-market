import toast from "react-hot-toast";

const ArrivalCart = ({ idx, product }) => {
  console.log("product ", product);

  const handleShopNow = (id) => {
    console.log("shopping now :", id);
    toast.loading("coming soon...");
  };

  return (
    <>
      <div
        className={`border bg-black text-white p-6 md:h-[225px] lg:h-[300px] ${
          idx === 0
            ? "row-span-2 col-span-2 h-96 md:h-[calc(450px+24px)] lg:h-[calc(600px+24px)]"
            : idx === 1
            ? "col-span-2"
            : `text-sm`
        }`}
      >
        <div className="group relative h-full w-full">
          <figure className="h-full w-full">
            <img
              className={`h-full w-full ${idx}`}
              src={product?.image}
              alt={product?.title}
            />
          </figure>

          <div className="absolute bottom-4 left-3 z-10 w-full max-w-72 space-y-1 md:space-y-3">
            <h3 className="text-lg lg:text-2xl font-semibold">
              {product?.title}
            </h3>
            <p>{product?.description}</p>

            <button
              onClick={() => handleShopNow(product?._id)}
              className="group relative inline-block"
            >
              <span className="px-3 py-1 transition duration-300 border-b border-white hover:bg-white hover:text-black">
                Shop Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArrivalCart;
