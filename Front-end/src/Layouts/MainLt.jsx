import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const MainLt = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>this is a footer</footer>
    </>
  );
};

export default MainLt;
