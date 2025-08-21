import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Product from "./pages/Product";
import CategoryPage from "./pages/Category-Page";
import CartPage from "./pages/CartPage";
// import Home from "./pages/Home";
import "./App.css";

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
                {
                    path: "/category",
                    element: <CategoryPage />,
                },
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
