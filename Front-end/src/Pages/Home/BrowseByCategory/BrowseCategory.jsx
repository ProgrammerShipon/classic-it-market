import CategoryItem from "./CategoryItem";

const BrowseCategory = ({ category }) => {
  // console.log("category ", category);

  return (
    <>
      <div className="flex items-center flex-wrap gap-5">
        {category?.length &&
          category?.map((item) => <CategoryItem category={item} />)}
      </div>
    </>
  );
};

export default BrowseCategory;
