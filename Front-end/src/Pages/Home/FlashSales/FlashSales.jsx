import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useAllProducts from "../../../hooks/useAllProducts";
import FlashProducts from "./FlashProducts";

const FlashSales = () => {
  const { products } = useAllProducts();
  return (
    <>
      {products?.length ? (
        <PageSection>
          <SectionTitle subTitle="Today's" title="Flash Sales" />

          <FlashProducts products={products} />
        </PageSection>
      ) : null}
    </>
  );
};

export default FlashSales;
