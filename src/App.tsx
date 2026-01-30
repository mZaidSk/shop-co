import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Product from "./pages/Product";
import CategoryPage from "./pages/Category-Page";
import CartPage from "./pages/CartPage";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Signup from "./pages/Signup";

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
                  element: <Login />,
                
                },
                {
                    path:'/signup',
                    element:<Signup />
                },
                // demo check
                {
                    path:'/user',
                    element:<Link to={'/login'}>
                        <div className="w-full h-screen text-center text-5xl">admin</div>
                    </Link>
                },
                {
                    path:'*',
                    element : <Notfound/>
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;
