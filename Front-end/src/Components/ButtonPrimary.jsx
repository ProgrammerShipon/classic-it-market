export default function ButtonPrimary({ children, onClick, type = "button" }) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-9 bg-primary text-secondary mx-auto my-1 border border-transparent hover:bg-white hover:text-primary hover:border-primary transition duration-300 hover:shadow-md rounded-md"
      >
        {children}
      </button>
    </>
  );
}
