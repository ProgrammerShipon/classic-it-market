import { createBrowserRouter } from "react-router-dom";

import NotFound from "../ErrorPage/NotFound";
import MainLt from "../Layouts/MainLt";
import About from "../Pages/About/";
import Authentication from "../Pages/Authentication/Authentication";
import Contact from "../Pages/Contact/";
import Home from "../Pages/Home/";
import ProductDetails from "../Pages/ProductDetails";

// browser route
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLt />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <Authentication />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default Routers;
