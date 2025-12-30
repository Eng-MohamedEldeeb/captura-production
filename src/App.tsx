import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppRouters from "./App-Routers";

function App() {
  return (
    <>
      <RouterProvider router={AppRouters()} />
    </>
  );
}

export default App;
