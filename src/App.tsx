import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import CartPage from "./pages/CartPage";
// import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
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
          path: "/cartPage",
          element: <CartPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
