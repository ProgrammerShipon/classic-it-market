import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useAllProducts from "../../../hooks/useAllProducts";
import ExploreProducts from "./ExploreProducts";

const ExploreOurProducts = () => {
  const { products } = useAllProducts();

  return (
    <>
      {products?.length ? (
        <PageSection>
          <SectionTitle subTitle="Our Products" title="Explore Our Products" />

          <ExploreProducts products={products} />
        </PageSection>
      ) : null}
    </>
  );
};

export default ExploreOurProducts;
