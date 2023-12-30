import toast from "react-hot-toast";

const CategoryItem = ({ category }) => {
  const handleCategory = () => {
    toast.loading(`coming soon... ${category?.name}`);
  };

  return (
    <>
      <div
        onClick={handleCategory}
        className="w-32 h-32 rounded flex flex-col justify-center items-center gap-3 border hover:bg-primary hover:text-white transition duration-300 cursor-pointer"
      >
        <figure className="w-12 h-12"> {category?.icon} </figure>
        <h3 className="capitalize"> {category?.name} </h3>
      </div>
    </>
  );
};

export default CategoryItem;
