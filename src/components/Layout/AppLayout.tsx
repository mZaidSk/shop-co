import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ShowBanner from "../Header/ShowBanner";

const AppLayout = () => {
    return (
        <div>
            <ShowBanner />
            <div className="m-auto w-[90%] mb-8">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;
