import { createBrowserRouter } from "react-router-dom";

import MainLt from "../Layouts/MainLt";
import Authentication from "../Pages/Authentication/Authentication";
import Home from "../Pages/Home/";

// browser route
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLt />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <Authentication />,
      },
    ],
  },
]);

export default Routers;
