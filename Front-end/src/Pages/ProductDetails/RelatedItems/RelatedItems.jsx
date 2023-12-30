import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import RelatedProducts from "./RelatedProducts";

const RelatedItems = ({ setReCall }) => {
  return (
    <>
      <PageSection>
        <SectionTitle subTitle="Related Products" />

        <RelatedProducts setReCall={setReCall} />
      </PageSection>
    </>
  );
};

export default RelatedItems;
