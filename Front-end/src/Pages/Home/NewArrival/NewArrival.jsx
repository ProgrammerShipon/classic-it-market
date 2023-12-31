import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useNewArrival from "../../../hooks/useNewArrival";
import NewArrivalProducts from "./NewArrivalProducts";

const NewArrival = () => {
  const { products } = useNewArrival();

  return (
    <>
      {products?.length ? (
        <PageSection>
          <SectionTitle subTitle="Featured" title="New Arrival" />

          <NewArrivalProducts products={products} />
        </PageSection>
      ) : null}
    </>
  );
};

export default NewArrival;
