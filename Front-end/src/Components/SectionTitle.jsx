const SectionTitle = ({ subTitle, title }) => {
  return (
    <>
      <div className="pb-14 max-w-max space-y-5">
        {subTitle && (
          <h3 className="text-primary flex items-center gap-2 relative pl-5 font-inter">
            <span className="absolute top-0 left-0 h-full w-3 bg-primary rounded-sm"></span>
            <span className="text-base font-semibold">{subTitle}</span>
          </h3>
        )}

        {title && (
          <h1 className="text-4xl font-inter font-semibold"> {title} </h1>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
