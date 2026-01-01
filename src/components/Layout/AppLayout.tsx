import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ShowBanner from "../Header/ShowBanner";

const AppLayout = () => {
    return (
        <div>
            <ShowBanner />
            <div className="m-auto md:w-[90%] w-[95%] mb-8 z-999">
                <Header />
            </div>
                <Outlet />
            <div className="m-auto md:w-[90%] w-[95%] mb-8">   
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;
