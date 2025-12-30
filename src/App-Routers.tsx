import { createBrowserRouter } from "react-router-dom";
import { Home, Layout } from "./project/Pages";

const AppRouters = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
};

export default AppRouters;
