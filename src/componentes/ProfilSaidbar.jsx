import { useContext } from "react";
import { ContextData } from "../componentes/context/Context";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ProfileSidebar() {
    const {
        navigate,
        getCurrentUser,
        Toast,
    } = useContext(ContextData);

    // logout funksiyasi
    function logout() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("currentUser");
                getCurrentUser();
                navigate("/");
                Toast.fire({
                    icon: "success",
                    title: "Loged out successfully"
                });
            }
        });
    };


    const styles = {
        listStyle: "none",
        padding: 0,
    };

    return (
        <ul className="profileSidebar w-25 d-flex flex-column gap-3 fs-5" style={styles}>
            <li>
                <Link to={"status"}> Profile Status</Link>
            </li>
            <li>
                <Link to={"add"}>Add new Product</Link>
            </li>
            <li>
                <Link to={"likes"}>Favorites</Link>
            </li>
            <li>
                <button onClick={logout} className="d-flex align-items-center justify-content-center gap-2 fs-5 btn btn-outline-danger mt-4">Logout</button>
            </li>
        </ul>
    )
}

export default ProfileSidebar