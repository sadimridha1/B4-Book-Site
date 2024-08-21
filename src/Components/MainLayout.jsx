import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-[1180px] mx-auto">
            <Header />
            <Outlet />

        </div>
    );
};

export default MainLayout;