import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useBrowseCategory from "../../../hooks/useBrowseCategory";
import BrowseCategory from "./BrowseCategory";

export default function BrowseByCategory() {
  const { category } = useBrowseCategory();

  // console.log("category ", category);

  return (
    <>
      {category?.length ? (
        <PageSection>
          <SectionTitle subTitle="Categories" title="Browse By Category" />

          <BrowseCategory category={category} />
        </PageSection>
      ) : null}
    </>
  );
}
