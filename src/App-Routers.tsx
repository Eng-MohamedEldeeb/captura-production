import { createBrowserRouter } from "react-router-dom";
import { BookNow, Home, Layout } from "./project/pages";

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
        {
          path: "/book-now",
          element: <BookNow />,
        },
      ],
    },
  ]);
};

export default AppRouters;
