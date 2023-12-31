import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useAllProducts from "../../../hooks/useAllProducts";
import BestSellingProducts from "./BestSellingProducts";

const BestSelling = () => {
  const { products } = useAllProducts();

  return (
    <>
      {products?.length ? (
        <PageSection>
          <SectionTitle subTitle="This Month" title="Best Selling Products" />

          <BestSellingProducts products={products} />
        </PageSection>
      ) : null}
    </>
  );
};

export default BestSelling;
