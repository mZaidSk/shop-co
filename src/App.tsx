import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import ProductCart from "./pages/ProductCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/product",
        //   element: <Product />,
        // },
        // {
        //   path: "/category",
        //   element: <Category />,
        // },
        // {
        //   path: "/filters",
        //   element: <Filters />,
        // },
        {
          path: "/productcart",
          element: <ProductCart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
