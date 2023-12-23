import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import FlashProducts from "./FlashProducts";

const FlashSales = () => {
  return (
    <>
      <PageSection>
        <SectionTitle subTitle="Today's" title="Flash Sales" />

        <FlashProducts />
      </PageSection>
    </>
  );
};

export default FlashSales;
