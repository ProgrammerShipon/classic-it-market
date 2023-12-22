import { Outlet } from "react-router-dom";

const MainLt = () => {
  return (
    <>
      <header>this is a header</header>

      <main>
        <Outlet />
      </main>

      <footer>this is a footer</footer>
    </>
  );
};

export default MainLt;
