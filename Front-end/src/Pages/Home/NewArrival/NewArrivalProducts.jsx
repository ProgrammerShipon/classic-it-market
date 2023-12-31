import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import ArrivalCart from "./ArrivalCart";
// import ProductCart from "./ProductCart";

const NewArrivalProducts = ({ products }) => {
  // console.log("products ", products);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-6">
        {products?.length &&
          products.map((product, idx) => (
            <ArrivalCart idx={idx} key={product?._id} product={product} />
          ))}
      </div>

      <div className="mt-12 text-center ">
        <ButtonPrimary>
          <span>View All Products</span>
        </ButtonPrimary>
      </div>
    </>
  );
};

export default NewArrivalProducts;
