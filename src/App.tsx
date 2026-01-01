import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Product from "./pages/Product";
import CategoryPage from "./pages/Category-Page";
import CartPage from "./pages/CartPage";
// import Home from "./pages/Home";
import "./App.css";
import Home from "./pages/Home";
import { LogIn } from "lucide-react";

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
                {
                  path: "/product",
                  element: <Product />,
                },
                { 
                    path: "/category",
                    element: <CategoryPage />,
                },
                {
                    path: "/cartPage",
                    element: <CartPage />,
                },
            
            ],
        },
        {
            path :'/',
            children:[
                {
                  path: "/login",
                  element: <LogIn />,
                },
                {
                    path:'/user',
                    element:<div>admin</div>
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;
