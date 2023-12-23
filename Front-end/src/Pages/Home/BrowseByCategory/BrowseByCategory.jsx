import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";

const category = [
  {
    icon: "example",
    name: "Phone",
    _id: "",
  },
];

export default function BrowseByCategory() {
  return (
    <>
      <PageSection>
        <SectionTitle subTitle="Categories" title="Browse By Category" />
      </PageSection>
    </>
  );
}
