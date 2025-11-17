import Header from "../UI/Header";
import Footer from "../UI/Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="  body-background ">



            {/* Actual Page Content */}
            <Header />

            {/* <div className="w-[80%] mx-auto "> */}
                <Outlet />
            {/* </div> */}

            <Footer />

        </div>
    );
};

export default Layout;
