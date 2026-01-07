import { createBrowserRouter } from "react-router-dom";
import { BookNow, ContactUs, Gallery, Home, Layout } from "./project/pages";

const AppRouters = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/book-now",
          element: <BookNow />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);
};

export default AppRouters;
