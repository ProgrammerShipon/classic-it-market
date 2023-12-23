export default function ButtonPrimary({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="py-4 px-12 bg-primary text-secondary mx-auto my-1 border hover:bg-white hover:text-primary hover:border-primary transition duration-300 hover:shadow-md rounded-md"
      >
        {children}
      </button>
    </>
  );
}
