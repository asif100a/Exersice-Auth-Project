import { Outlet } from "react-router-dom";
import Navber from "../Layouts/Navber";

const Root = () => {
    return (
        <div>
            <Navber />
            <Outlet />
        </div>
    );
};

export default Root;