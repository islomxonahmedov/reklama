import { useContext, useEffect } from "react";
import { ContextData } from "../componentes/context/Context";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "../componentes/ProfilSaidbar";

function Profile() {
    const {
        currentUser,
        navigate,
    } = useContext(ContextData);

    useEffect(() => {
        if (!currentUser) navigate("/");
    }, [currentUser, navigate]);

    return (
        <div className="" style={{ gap: "150px" }}>
            <ProfileSidebar />

            <div className="w-75">
                <Outlet />
            </div>
        </div>
    )
}

export default Profile