import { createBrowserRouter } from "react-router-dom";

import MainLt from "../Layouts/MainLt";
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
    ],
  },
]);

export default Routers;
